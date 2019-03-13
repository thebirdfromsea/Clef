import React, { Component } from 'react';
import { Search } from 'react-spotify-api';
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import SearchBar from 'material-ui-search-bar';
import { Artist } from 'react-spotify-api'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";




export default class Songsearch extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            value : '  ',
            display : 'defaultDisplay'
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
 
    handleChange(event) {
        event.preventDefault() ;
        this.setState({value: event.target.value,
                       display: 'defaultDisplay'
        }); 
        console.log(this.state.value)
      }

    handleSubmit(event) {
        event.preventDefault(); 
        this.setState({display : 'loadDisplay'}) ; 
        console.log(this.state.display) ;
    }
    
 
    render() {
        return (
            this.state.display == 'defaultDisplay'? (
            <div> 
           <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
           </form>
           
            </div>
         ) : 

         (
        <div> 
         <form onSubmit={this.handleSubmit}>
              <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
         </form>
         <Search query= {this.state.value} album artist>
            
            {(data, loading, error) =>
                 data ? (
                <ul>
                    <li>Albums</li>
                    <li>{this.state.value}</li>
                    <ul>
                        {data.albums.items.map(album => (
                            <li key={album.id}>{album.name}</li>
                        ))}
                    </ul>
                    <li>Artists</li>
                    <ul>
                        {data.artists.items.map(artist => (
                            <li key={artist.id}>{artist.name}</li>
                        ))}
                    </ul>
                </ul>
            ) : null
                }
            </Search> 

         
            </div>)
         
            


        ); 

            
   /*     <div className="col" id="songSearch">
        <h4 style={formatSearch}>
            Songs search
            </h4>
            <p style={searchSection}>
                This section of the page is for the song search.
                </p>
                </div>
            }
    */
        }
 }