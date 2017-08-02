import React from 'react';

const VideoDetail = ({video}) => {

	if(!video){
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
		);
};

export default VideoDetail;



/*more es6 changes:
const url = `https://www.youtube.com/embed/${videoId}`;

is identical (except for the fact that we are taking advantage of es6 string interpolation vs string concatentation) to this:
const url = "https://www.youtube.com/embed/" + videoId;


as a side note I know that string interpolation is actually slower in scala (maybe this is true of all languages backed by the JVM).
*/
