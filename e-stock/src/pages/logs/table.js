import './styles.css';
import { format } from 'date-fns';

export default function Table() {
  const Products = JSON.parse(localStorage.getItem("products")) || [];
  const Logs = JSON.parse(localStorage.getItem("logs")) || [];

  const calculateQuantityDiff = (product) => {
    const logs = Logs.filter(log => log.productId === product.id);
    const latestLog = logs[logs.length - 1];
    const diff = latestLog ? latestLog.quantity - product.quantity : product.originalQuantity - product.quantity;
    return isNaN(diff) || diff < 0 ? 0 : diff;
  }
  

  const sortedProducts = Products.map((product) => {
    const diff = calculateQuantityDiff(product);
    const transactionId = isNaN(product.transactionId) ? product.id : product.transactionId;
    const transactionDate = isNaN(product.transactionDate) ? product.dateCreated : product.transactionDate;

    
    // create a new log entry for each update
    if (diff > 0 && (!Logs.length || Logs[Logs.length - 1].quantity !== product.quantity)) {
      const logEntry = {
        transactionId: transactionId,
        productId: product.id,
        productName: product.productName,
        quantity: product.quantity,
        quantityRemoved: diff,
        transactionDate: new Date().toISOString(),
        modifiedBy: product.modifiedBy,
      };
      Logs.push(logEntry);
      localStorage.setItem("logs", JSON.stringify(Logs));
    }
    

    return {
      ...product,
      transactionId: transactionId,
      quantityRemoved: diff,
      transactionDate: transactionDate,
    };
  })

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Transaction Date</th>
          <th>Stocks</th>
          <th>Quantity Removed</th>
          <th>Modified By</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.flatMap((product, index) => {
          const productLogs = Logs.filter(log => log.productId === product.id);
          const logs = [...productLogs, ...(product.logs || [])];
          return [
            <tr key={`${index}_product`}>
              <td>{product.transactionId}</td>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.transactionDate && format(new Date(product.transactionDate), 'dd MMMM yyyy')}</td>
              <td style={{ color: "#029801" }}>{product.originalQuantity}</td>
              <td style={{ color: "#FF0100" }}>{product.quantityRemoved}</td>
              <td>{product.modifiedBy}</td>
            </tr>,
            ...logs.map((log, i) => (
              <tr key={`${index}_log_${i}`}>
                <td>{log.transactionId}</td>
                <td>{log.productId}</td>
                <td>{log.productName}</td>
                <td>{log.transactionDate && format(new Date(log.transactionDate), 'dd MMMM yyyy')}</td>
                <td style={{ color: "#029801" }}>{log.quantity}</td>
                <td style={{ color: "#FF0100" }}>{log.quantityRemoved}</td>
                <td>{log.modifiedBy}</td>
              </tr>
            )),
          ];
        })}
      </tbody>
    </table>
  );
}
