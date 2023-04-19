import './styles.css';
import { format } from 'date-fns';

export default function Table() {
  const Products = JSON.parse(localStorage.getItem("products")) || [];

  const calculateQuantityDiff = (product) => {
    const diff = product.originalQuantity - product.quantity;
    if (isNaN(diff) || diff <= 0) {
      return [];
    } else {
      const logs = [];
      
      let quantity = product.quantity;
      for (let i = 1; i <= diff; i++) {
        quantity--;
        logs.push({
          transactionId: `12345602356${i}`,
          id: product.id,
          productName: product.productName,
          transactionDate: new Date().toISOString(),
          quantity: quantity,
          quantityRemoved: 1,
          modifiedBy: product.modifiedBy
        });
      }
      return logs;
    }
  }

  let logIndex = 1;
  const sortedProducts = Products.flatMap((product) => {
    const logs = calculateQuantityDiff(product);
    logs.unshift({
      transactionId: isNaN(product.transactionId) ? `12345602356${logIndex++}` : product.transactionId,
      id: product.id,
      productName: product.productName,
      transactionDate: isNaN(product.transactionDate) ? new Date().toISOString() : product.transactionDate,
      quantity: product.quantity,
      quantityRemoved: 0,
      modifiedBy: product.modifiedBy
    });
    return logs;
  });

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
        {sortedProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.transactionId}</td>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{format(new Date(product.transactionDate), 'dd MMMM yyyy')}</td>
            <td style={{ color: "#029801" }}>{product.quantity}</td>
            <td style={{ color: "#FF0100" }}>{product.quantityRemoved}</td>
            <td>{product.modifiedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
