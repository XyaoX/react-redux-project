import React from 'react';
import User from './User';

const Dashboard = () => (
    <div>
        <User />
    </div>
)



export default Dashboard;



// class Input extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             count : 0,
//             list:[{
//                 name:'eric',
//                 age:10
//             },
//         {
//             name:'joyce',
//             age:9
//         }],
//         text:'',
//         person:this.props.ppl
//     };

//     }
//     componentWillReceiveProps=(props)=> {
//         this.setState({ person: props.ppl });  
//       }
//     handleChange(){
//         this.setState({count:this.state.count+1});
//     }

//     // handleChange=(e)=>{
//     //     this.setState({count:this.state.count+1});
//     // }

//     changeText=(e)=>{
//         this.setState({text:e.target.value});
//     }

//     render(){
//         return (
//             <div>
//                 <p>{this.state.text}</p>
//                 <h3>Count : {this.state.count}</h3>
//                 <button onClick={this.handleChange} >click me bitch</button>
//                 <ol>
//                 {this.state.list.map((obj,i)=>{
//                     return (<li key={i}>{obj.name} {obj.age}</li>)
//                 })}
//                 </ol>
//                 <p>{this.state.person.name}</p>
//                 <input type="text" onChange={this.changeText}/>
//             </div>
//         )
//     }
// }


// export default Input;