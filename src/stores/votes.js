import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { format } from 'timeago.js'
import data from '../assets/data.json'

export const useVotesStore = defineStore(
  'votes',
  () => {
    const initialVotes = ref([])

    const setInitial = () => {
      const { data: content } = data

      initialVotes.value = content
    }

    const setVote = ({ voteType, id }) => {
      initialVotes.value = initialVotes.value.map((vote) => {
        if (vote.id === id) {
          if (voteType === 'positive') {
            vote.votes.positive++
          }

          if (voteType === 'negative') {
            vote.votes.negative++
          }
        }

        return vote
      })
    }

    const votes = computed(() =>
      initialVotes.value.map((vote) => {
        vote.votes.status = vote.votes.positive >= vote.votes.negative ? 'positive' : 'negative'

        const readableDate = format(vote.lastUpdated.substring(0, 10))

        vote.readableDate = readableDate

        const total = vote.votes.positive + vote.votes.negative

        const percentages = {
          positive: ((vote.votes.positive / total) * 100).toFixed(1),
          negative: ((vote.votes.negative / total) * 100).toFixed(1),
        }

        return { ...vote, percentages }
      })
    )

    setInitial()

    return {
      initialVotes,
      votes,
      setVote,
    }
  },
  {
    persist: true,
  }
)
