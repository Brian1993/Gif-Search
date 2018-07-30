import React ,{Component} from 'react';
import './header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    SearchGif =()=>{
       let searchWord= this.Searh.value
        this.props.onSearch(searchWord);
    }
    render() { 
        return (
            <div  className="header">
                <div className="header_content_container">
                    <div className="header_content_left">
                        <h1 > GIFSEARCH</h1>
                    </div>
                    <div className="header_content_right">
                       
                            <input onChange={this.SearchGif}  ref={input=>this.Searh = input }  placeholder="Search...." />
                            <i className="fas fa-search"></i>
                      
                    </div>
                </div>
            </div>
        );
    }
}
 

 
export default Header;