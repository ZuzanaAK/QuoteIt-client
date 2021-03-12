import React from "react";
import { Link } from "react-router-dom";
import "../components/scss/main.scss";

class QuoteList extends React.Component {

  // divContainer = ["intro", "content"]

  backgroundColor = [
    "#F94144",
     //"#F3722C",
    // "#F8961E",
    "#90BE6D",
    "#43AA8B",
    "#577590",
  ];

  render() {
    return (
      <div className="QuoteList">
          
          
        {this.props.quotes.map((quote, index) => {
  
          let colorIndex = index % this.backgroundColor.length;
          //let divIndex = index % this.divContainer.length === 0 ? 0 : 1;

          return (
           
            <div key={quote._id}
            className="QuoteContainer"
            //   className={this.divContainer[divIndex]}
              style={{
                backgroundColor: `${this.backgroundColor[colorIndex]}`,
              }}
            >
              <Link
                className="QuoteLink"
                to={`/quote/${quote._id}`}
              >
                  <p key={quote._id}>{quote.quote}</p>
              </Link>
            </div>
           
          );
        })}
       
      </div>
    );
  }
}

export default QuoteList;