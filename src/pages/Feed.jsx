import React from 'react'
import FeedHero from '../components/FeedHero'
import NewPost from '../components/NewPost'
import UserData from '../components/UserData'

const Feed = () => {
  return (
    <>
      <FeedHero />
      <NewPost />
      <UserData />
    </>
  )
}

export default Feed