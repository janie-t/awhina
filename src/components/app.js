
const React = require('react')
const Comment = require('./comment')


module.exports = function App (props) {
  console.log('props', props)
  const { store, model} = props //same as below
  // var store = props.store
  // var model = props.model
  const author = 'Janie Tito'

  return (
    <div>
      <h1>{model.appName}</h1>
      <h3>{model.welcome}</h3>
      <h4>{model.description}</h4>
      <p>{model.question}</p>
      <div><a href="/home/motivate">{model.topics}</a></div>
    </div>
  )
}

// <table>
//   <tbody>
//   {
//     Object.keys(model.products).map(key => {
//       const {name, price, stock, id} = model.products[key]
//       return (
//         <tr key={id}>
//           <td>{name}</td>
//           <td>${price}</td>
//           <td>{stock}</td>
//           <td><button onClick={() => store.addToCart(model.products[id])}>Add to cart</button></td>
//         </tr>
//       )
//     })
//   }
//   </tbody>
// </table><br /><br />
// <h2>Cart</h2>
// <table>
//   <tbody>
//   {
//     Object.keys(model.cart).filter(key => model.cart[key].quantity).map(key => {
//       const {name, price, quantity, id} = model.cart[key]
//       return (
//         <tr key={id}>
//           <td>{name}</td>
//           <td>${price}</td>
//           <td>{quantity}</td>
//           <td><button onClick={() => store.removeFromCart(model.cart[id])}>Remove</button></td>
//           <td>${price * quantity}</td>
//         </tr>
//       )
//     })
//   }
//   </tbody>
// </table>
// <h3>Total: ${model.total}</h3>
