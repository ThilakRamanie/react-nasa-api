import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Pagination from "react-js-pagination";

const useStyles = (theme) => ({
    root: {
      display: 'flex',
      margin:1
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    search: {
      display:'inline-block',
      margin:5,
      color:'blue',
      fontWeight:'bold'
    },
    searchText: {
      backgroundColor:'#a9ada6',
      borderRadius:'10px',
      padding:5
    }
  });

class Result extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        activePage: 1,
      };
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    
    render(){
        var totalResults; 
        var keywordArray = [];
        const { classes } = this.props
      if (Object.keys(this.props.data).length > 0){
         totalResults = this.props.data.metadata.total_hits;
         if(totalResults<=0 ||totalResults>=10000) {
            return(
                <div>
          <h3>Search Result for {this.props.query} </h3>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                OOPS!
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                No Results Found
                </Typography>
              </CardContent>
            </div>
          </Card>
          </div>
            );
         }
         console.log(totalResults)
         const items = this.props.data.items;
         const pageLength = items.length;
      return(          
        <div className="list-group">
        <h3>Search Results for {this.props.query} </h3>
          {items.slice((this.state.activePage-1)*5,this.state.activePage*5).map(item =>
    <div>
        <Card className={classes.root}>
            <CardMedia
            className={classes.cover}
            image={item.links[0].href}
            title={item.data[0].title}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
              {item.data[0].title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              Date Created: {item.data[0].date_created.split('T')[0]}
              </Typography>
            </CardContent>
          </div>
        </Card>
        <div style={{display:'none'}}>
        {keywordArray.push(item.data[0].keywords)
        }
        {console.log(item.data[0].keywords)}
        </div>
    </div>
          )}

<div style={{display:'flex',justifyContent:'center',margin:5}}>
          <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={pageLength}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          itemClass="page-item"
          linkClass="page-link"
          />
</div>
<div>
  Related searches: {keywordArray[keywordArray.length-1]===undefined?
  <div className={classes.search}>
  <p className={classes.searchText}>No related search results</p>
</div>
  :keywordArray[keywordArray.length-1].map(
    related=>
    <div className={classes.search}>
      <p className={classes.searchText}>{related}</p>
    </div>
  )}
</div>
      </div>  
      )
      }
      else{
          return(
              <div>
        <h3>Search Result for {this.props.query} </h3>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
              OOPS!
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              No Results Found
              </Typography>
            </CardContent>
          </div>
        </Card>
        </div>
          );
      }
    }
  }
  export default  withStyles(useStyles, { withTheme: true })(Result);