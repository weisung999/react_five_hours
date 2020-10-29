import React from 'react'
import './style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard'
import todosData from './components/todosData'
import Form from './components/FormContainer'


function App() {
    return (
        <Form />
    )
}



//  todo
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//           todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(id) {
//         this.setState(prevState => {
//             // 不能直接更改todos所以複製為一個新updatedTodos
//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo
//             })
//             return {
//               todos: updatedTodos
//             }
//         })
//     }

//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
//         handleChange={this.handleChange} />)

//         return (
//           <div className="body">
//             <Header />

//             {todoItems}

//             <MainContent />
//             <ContactCard
//               contact={{
//                 name: "Mr.Whiskyson", imgUrl: "https://elt.rti.org.tw/wp-content/uploads/2020/06/960x540_learning-english-take-away-english-what-does-a-dog-mean-when-it-wags-its-tail-imagesgetty.jpg",
//                 phone: "(02) 1234-4321", email: "mr.whiskyson@gmail.com"
//               }}
//             />
//             <ContactCard
//               contact={{
//                 name: "Ms.Judy", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC_5JDksP0EffMwgWCRzVqkigbZdBM_8WDdw&usqp=CAU",
//                 phone: "(02) 3334-4321", email: "ms.judy@gmail.com"
//               }}
//             />
//             <ContactCard
//               contact={{
//                 name: "Mr.Beer", imgUrl: "https://images.theconversation.com/files/342682/original/file-20200618-41213-iu7wbs.jpg?ixlib=rb-1.1.0&rect=9%2C4%2C3268%2C2177&q=45&auto=format&w=926&fit=clip",
//                 phone: "(02) 8764-4321", email: "mr.beer@gmail.com"
//               }}
//             />
//             <Footer />
//           </div>
//         );
//     }
// }

export default App;
