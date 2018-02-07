/* global google */
import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager"
import mapStyles from "./styles.json"
import Card from '../Card/Card'
import RefreshIndicator from '../RefreshIndicator'
import TutorialDialog from '../TutorialDialog/TutorialDialog'

class ClassName extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loadingStatus: 'loading',
			traceCount: 0,
			traces:[],
			myLatLng: {
				lat: 666,
				lng: 888
			},
			open: false,
		}
	}
	getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                        myLatLng: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
						loadingStatus: 'hide',
						open: true,
                    }
                );
            })
        } else {
            //browser doesn't support geolocation, set as vancouver
            this.setState({
                    myLatLng: {
                        lat: 25.058818,
                        lng: 121.513583
                    }
                }
            );
        }
    }
	componentWillMount() {
		this.getLocation()
	}

	incremental() {
		this.setState({
			traceCount : this.state.traceCount + 1,
		})
	}
	render() {
		return (
			<div>
			  <RefreshIndicator status={this.state.loadingStatus}/>
			  <TutorialDialog open={this.state.open}/>
			  <GoogleMap
			    defaultZoom={13}
			    center={this.state.myLatLng}
				defaultOptions={{ styles: mapStyles }}
			  >
				  <DrawingManager
					defaultDrawingMode={google.maps.drawing.OverlayType.POLYLINE}
					defaultOptions={{
					  drawingControl: true,
					  drawingControlOptions: {
						position: google.maps.ControlPosition.TOP_CENTER,
						drawingModes: [
						  google.maps.drawing.OverlayType.POLYLINE,
						]
					  },
					  polylineOptions: {
						strokeColor: `rgba(255, 97, 107, 0.8)`,
						strokeWeight: 2,
						icons: [{
							icon: {
					            path: google.maps.SymbolPath.CIRCLE,
					            scale: 4
					          },
							repeat: '120px'
				        }]
					  }
					}}
					onPolylineComplete={(line) => {
						this.incremental()
						this.state.traces.push({
							id: this.state.traceCount,
							trace: line.getPath().getArray(),
						});
						this.setState({
							traces: this.state.traces
						})
					}}
				  />
			  </GoogleMap>
			  <Card traceCount={this.state.traceCount} traces={this.state.traces}/>
			</div>
		)
	}
}

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA3tNNG24LrIurimBPXZ6ELC4bP0OU9ajw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
	containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(ClassName)

export default MyMapComponent;
