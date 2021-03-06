import React from "react";
import { Link } from "react-router-dom";
import "../components/scss/main.scss";

class QuoteList extends React.Component {

  divContainer = ["parallax-wrapper", "regular-wrapper"]

  backgroundColor = [
    "#DAF7A6",
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
  ];

  render() {
    return (
      <div className="QuoteList">
        {this.props.quotes.map((quote, index) => {
  
          let colorIndex = index % this.backgroundColor.length;
          let divIndex = index % this.divContainer.length === 0 ? 0 : 1;
          
          return (
            <div
              className={this.divContainer[divIndex]}
              style={{
                backgroundColor: `${this.backgroundColor[colorIndex]}`,
              }}
            >
              <Link
                key={quote._id}
                className="QuoteLink"
                to={`/quote/${quote._id}`}
              >
                <div className="content">
                  <p key={quote._id}>"{quote.quote}"</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuoteList;
