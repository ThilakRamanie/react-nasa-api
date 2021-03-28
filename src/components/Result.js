class Result extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      //console.log(Object.keys(this.props.data).length);
      console.log(this.props.data)
      if (Object.keys(this.props.data).length > 0){
         const totalResults = this.props.data.metadata.total_hits;
         const items = this.props.data.items;
      return(
        <div className="list-group">
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Results about {this.props.searchText}:</h5>
        <small>{totalResults}</small>
      </div>
    </a>
          {items.map(item =>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{item.data[0].title}</h5>
      </div>
      <img src={item.links[0].href} className="rounded img-thumbnail"></img>
      <small className="text-muted">{item.data[0].description}</small>
    </a>
          )}
      </div>  
      )
      }
      else{
        return(<div></div>)
      }
    }
  }
  