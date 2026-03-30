class Twitter {
    constructor() {
        this.tweets = []
        this.rel = {}
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.tweets.push({ userId, tweetId })
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) { 
        const result = []
        const following = this.rel[userId]
        let i = this.tweets.length - 1
        while(i >= 0 && result.length < 10){
            const tweet = this.tweets[i]
            if(
                userId === tweet.userId || 
                following?.has(tweet.userId)
            ){
                result.push(tweet.tweetId)
            }
            i--
        }
        return result
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.rel[followerId] ??= new Set()
        this.rel[followerId].add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.rel[followerId].delete(followeeId)
    }
}
