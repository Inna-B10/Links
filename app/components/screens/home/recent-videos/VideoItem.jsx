import styles from './RecentVideos.module.scss'

const VideoItem = ({ item }) => {
	return (
		<a href={`https://youtu.be/${item.videoId}`} target='_blank' rel='noreferrer'>
			<div className={styles.videoItem}>
				<h3>Ch: {item.channel}</h3>
				{/* eslint-disable-next-line @next/next/no-img-element*/}
				<img src={item.thumbnail} alt={item.title} width={238} />
				<p>{item.title}</p>
			</div>
		</a>
	)
}

export default VideoItem
