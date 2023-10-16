
 const connection = require('../config/dbConnection');
 
// Get all products
const getAllProducts = (callback) => {
    const query = 'SELECT * FROM product';
    connection.query(query, (error, results) => {
      if (error) throw error;
    });
  };


// Create a new product
const createProductModel = (product, callback) => {
  const { name, description, point_vaule, image_name } = product;
  const query = 'INSERT INTO product (name, description, point_vaule, image_name) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, description, point_vaule, image_name], (error, results) => {
    if (error) throw error;
    callback(results.insertId);
  });
};



// Get a product by ID
const getProductById = (productId, callback) => {
  const query = 'SELECT * FROM product WHERE id = ?';
  connection.query(query, [productId], (error, results) => {
    if (error) throw error;
    callback(results[0]);
  });
};

// Update a product
const updateProductModel = (productId, updatedProduct, callback) => {
  const {name, description, point_vaule, image_name} = updatedProduct;
  const query = 'UPDATE product SET name = ?, price = ?, description = ? WHERE id = ?';
  connection.query(query, [name, description, point_vaule, image_name, productId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows > 0);
  });
};

// Delete a product
const deleteProductModel = (productId, callback) => {
  const query = 'DELETE FROM product WHERE id = ?';
  connection.query(query, [productId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows > 0);
  });
};

// // Usage example
// createProduct(
//   {
//     name: 'Sample Product',
//     description: 'This is a sample product.',
//     point_vaule: '0', 
//     image_name: 'test'
//   },
//   (productId) => {
//     console.log('Product created with ID:', productId);
    
//     // Get all products
//     getAllProducts((products) => {
//       console.log('All products:', products);
      
//       // Get a specific product by ID
//       getProductById(productId, (product) => {
//         console.log('Product with ID', productId, ':', product);
        
//         // Update the product
//         updateProduct(productId, { name: 'Updated Product', price: 14.99, description: 'This product has been updated.' }, (isUpdated) => {
//           console.log('Product updated:', isUpdated);
          
//           // Delete the product
//           deleteProduct(productId, (isDeleted) => {
//             console.log('Product deleted:', isDeleted);
//             connection.end(); // Close the database connection
//           });
//         });
//       });
//     });
//   }
// );






module.exports = connection.
//  {createProductModel, getAllProducts, getProductById, updateProductModel, deleteProductModel};
