import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';
import Hamburger from './HamburgerMenu';
import './App.css';

class App extends React.Component{
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('buildings');
    };


    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    };

    render(){
        return (
            <div>
   
            <div id="outer-container">
                
                <Hamburger pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
                <main id="page-wrap">
                    <div className="ui container" style={{paddingTop: '50px'}}>
                        <SearchBar onTermSubmit={this.onTermSubmit}/>
                    </div>
                    <div className="ui container bodycontainer" style={{paddingTop: '30px'}}>
                        <div className="ui two column centered stackable grid">
                            <div className="ui row" style={{marginTop: '2em'}}>
                                <div className="seven wide column" >                       
                                    <VideoDetail video={this.state.selectedVideo} />
                                </div>
                                <div className="four wide column">
                                    <div className="ui segment">
                                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            </div>


            
        );
    }
};
export default App;