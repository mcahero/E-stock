import './styles.css';
import { format } from 'date-fns';

export default function Table() {
  const Products = JSON.parse(localStorage.getItem("products")) || [];

  const calculateQuantityDiff = (product) => {
    const diff = product.originalQuantity - product.quantity;
  return isNaN(diff) || diff < 0 ? 0 : diff;
  }

  const sortedProducts = Products.map((product) => {
    return {
      ...product,
      transactionId: isNaN(product.transactionId) ? product.id : product.transactionId,
     
      quantityRemoved: calculateQuantityDiff(product),
      transactionDate: isNaN(product.transactionDate) ? product.dateCreated : product.transactionDate,
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
        {sortedProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.transactionId}</td>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.transactionDate && format(new Date(product.transactionDate), 'dd MMMM yyyy')}</td>
            
            <td  style={{ color: "#029801" }}>{product.quantity}</td>
            <td style={{ color: "#FF0100" }}>{product.quantityRemoved}</td>
            <td>{product.modifiedBy}</td>
         
          </tr>
        ))}
      </tbody>
    </table>
  );
}