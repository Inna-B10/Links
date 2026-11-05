import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import styles from './RecentVideos.module.scss'
import VideoItem from './VideoItem'

const RecentVideos = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get recent videos'],
		queryFn: async () => await axios.get('/api/youtube'),
		select: ({ data }) => data,
	})
	console.log(data)
	return (
		<div className={styles.videoWrapper}>
			<h2 className={styles.heading}>Last videos from:</h2>
			<div className={styles.recentVideos}>
				{isLoading ? 'Loading...' : data?.length > 0 ? data.map(video => <VideoItem key={video.videoId} item={video} />) : 'Waiting for videos'}
			</div>
		</div>
	)
}

export default RecentVideos
