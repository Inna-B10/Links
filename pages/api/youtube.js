import { CHANNELS } from '@/app/constants'

const parseFirstVideo = async channelId => {
	const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`)

	const xml = await response.text()

	const channelName = xml.match(/<author>\s*<name>(.*?)<\/name>\s*<uri>/)
	const titleMatch = xml.match(/<entry>[\s\S]*?<title>(.*?)<\/title>/)
	const videoIdMatch = xml.match(/<entry>[\s\S]*?<yt:videoId>(.*?)<\/yt:videoId>/)

	const channel = channelName?.[1]
	const title = titleMatch?.[1]
	const videoId = videoIdMatch?.[1]

	const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

	return {
		title,
		videoId,
		thumbnail,
		channel,
	}
}

export default async function handler(req, res) {
	const result = [await parseFirstVideo(CHANNELS[0]), await parseFirstVideo(CHANNELS[1])]
	res.status(200).json(result)
}

// export default async function handler(req, res) {
// 	const result = [await parseFirstVideo('justinstoys'), await parseFirstVideo('ClairesWears')]
// 	res.status(200).json(result)
// }
