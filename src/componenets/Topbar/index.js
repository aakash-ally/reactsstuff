
import React, { Component } from "react";
import { convertToUpper as toUpper, mockData } from "../../utils/constants";
import styles from "./Topbar.module.css";

// class TopBar extends React.Component {
//     state = 
//         {
//         count: 0,
//         val : "",
//         prev: "", 
//         inp: ""
//       };
             
    
//     //   shouldComponentUpdate(nextProps, nextState) {
//     //     if(this.state.prev == nextState.val)
//     //         return false
//     //     else{
//     //         this.state.prev = nextState.val
//     //         return true
//     //     }
          
        
//     //   }
//   render() {
//     console.log("Second Call");
//     const { count, val } = this.state;
//     return (
//       <div>
//           <input    
//           onChange={(e) => this.setState({ inp: e.target.value })}
//         />
//         <button className={styles.search} onClick={ () =>{this.setState({val: this.state.inp})}}>Submit</button>
//         <h1>{val}</h1>
//         <h1 className={styles.heading}>Count - {this.state.count}</h1>

//         <button
//           onClick={() =>
//             this.setState({
//               count: ++this.state.count
//             })
//           }
//         >
//           +
//         </button>
//         <button
//           onClick={() =>
//             this.setState({
//               count: --this.state.count,
//             })
//           }
//         >
//           -
//         </button>
//       </div>
//     );
//   }
// }

class TopBar extends React.Component {
    state = 
        {
            movies: [],
            searchValue: "",
            currmovies: []
      };
    
    componentDidMount(){
        console.log("third")
        fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        .then((res) => res.json())
        .then((res) => {
            this.setState({movies : res.Search, currmovies : res.Search})
        })
    }
    performsearch = ()=> {
        if(this.state.movies.length){
        const data = this.state.movies.filter((item)=>{
            return (item.Year.includes(this.state.searchValue)||item.Title.includes(this.state.searchValue))

        })
        this.setState({currmovies: data})        
        }
    }
  render() {

    console.log("Second Call");
    console.log(React.version)
    const { movies, searchValue, currmovies} = this.state;
    return (
      <div>
          <div className={styles.topbar}>
                    <h2> Hooked</h2>
                </div>
          <input    
          onChange={(e) => this.setState({ searchValue: e.target.value })}
        />
        <button className={styles.search} onClick={this.performsearch}>Submit</button>
        <div>
        
        {
        currmovies.length && currmovies.map(({ imdbID,Poster,Year,Title })=>(
            <div>
            <img src={Poster} width={200} />
              <h1> 
                {Title}
              </h1>
              <h2>
                {Year}
              </h2>
              <h2>
                {imdbID}
              </h2>    
            </div>
        ))}

        </div>
      </div>
    );
  }
}

export default TopBar;