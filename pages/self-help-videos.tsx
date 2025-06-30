import { NextPage } from 'next'
import Head from 'next/head'

const SelfHelpVideos: NextPage = () => {
  const videos = [
    {
      title: 'AC Repair Tips',
      description: 'Basic troubleshooting for common AC problems',
      youtubeUrl: '#',
      category: 'Air Conditioner'
    },
    {
      title: 'TV Display Issues',
      description: 'How to fix common TV display problems',
      youtubeUrl: '#',
      category: 'Television'
    },
    {
      title: 'Washing Machine Maintenance',
      description: 'Regular maintenance tips for your washing machine',
      youtubeUrl: '#',
      category: 'Washing Machine'
    },
    {
      title: 'Water Purifier Care',
      description: 'Essential maintenance for your RO water purifier',
      youtubeUrl: '#',
      category: 'Water Purifier'
    }
  ]

  return (
    <>
      <Head>
        <title>Self Help Videos - Varsha Enterprise</title>
        <meta name="description" content="Self-help repair videos for home appliances" />
      </Head>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Self Help Videos</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Watch our helpful repair and maintenance videos
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {videos.map((video) => (
              <article key={video.title} className="flex flex-col items-start">
                <div className="rounded-2xl bg-gray-50 p-4 w-full aspect-video flex items-center justify-center">
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-500 flex items-center"
                  >
                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="ml-2">Watch Video</span>
                  </a>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">Coming Soon</time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {video.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span>{video.title}</span>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{video.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SelfHelpVideos 