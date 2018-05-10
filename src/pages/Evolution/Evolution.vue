<template>
  <div class="container">

    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">

        <div class="navbar-brand">
          <div class="navbar-item">
            <p class="is-size-4">Blockchain Evolution in 2018</p>
          </div>

          <div class="navbar-item">
            <div class="field is-horizontal">
              <div class="control">
                <div class="select is-medium">
                  <select v-model="purpose">
                    <option value="0">The Highlights</option>
                    <option value="1">Concept Fluency</option>
                    <option value="2">A Deep Dive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>

    <!-- <breadcrumb></breadcrumb> -->

    <div class="section">
      <h1>Blockchain Evolution in 2018</h1>
    </div>


    <div class="columns">
      <div class="column is-two-thirds">

        <div class="section">
          <h2>Highlights and Hypotheses</h2>
          <p> European Parliament's

            <span
              @click="toggleTopic"
              x-topic="pos"
              v-bind:class="{ 'tag is-medium': purpose>1 }"
            >
              something here
              <button
                @click="toggleTopic"
                x-topic="pos"
                class="delete is-small"
                v-if="topics.pos.isExpanded"
              >
              </button>
            </span>

           Committee on Economic and Monetary Affairs voted overwhelmingly to adopt its virtual currencies and blockchain report this m European Parliament's influential Committee on Economic and Monetary Affairs voted overwhelmingly to adopt its virtual currencies and blockchain report this.</p>

          <h3 class="has-text-grey">Some hypothesis</h3>
          <p>I opine, that it is plainly traceable to the first arrival of the Greenland whaling ships in London, more than two centuries ago. Because those whalemen.</p>

          <div class="section has-background-white-ter" v-if="purpose>0">
            <h4>Some deeper info for you</h4>
            <p>pean Commission has adopted proposals for new legislation bringing virtual currency exchanges and wallet providers into the anti-money laundering framewo.</p>
            <br>

            <h5>Some depth</h5>
            <p> out their oil at sea as the Southern ships have always done; but cutting up the fresh blubber in small bits, thrust it through the bung holes of large casks, and c</p>

            <h5>Some other piece of depth</h5>
            <p>y it home in that manner; the shortness of the season in those Icy Seas, and the sudden and violent storms to which they are exposed, forbidding any other course. The consequence is, that upon breaking into the hold, and unloading one of these whale cemete</p>

          </div>

          <h3 class="has-text-grey">Another hypothesis</h3>
          <p>Did not then, and do not now, try out their oil at sea as the Southern ships have always done; but cutting up the fresh blubber in small bits, thrust it through the bung holes of large casks, and carry it home in that manner; the shortness of the season in those Icy Seas.</p>

          <h3 class="has-text-grey">Third hypothesis</h3>
          <p>Did not then, and do not now, try out their oil at sea as the Southern ships have always done; but cutting up the fresh blubber in small bits, thrust it through the bung holes of large casks, and carry it home in that manner; the shortness of the season in those Icy Seas.</p>
        </div>

      </div>

      <div class="column is-one-third">
        <div class="section depth" v-if="purpose>1">
          <span v-if="!hasDepth">Click on something below to learn more</span>
          <div v-if="hasDepth">
            <h5>Something</h5>
            <p>
              e millions of users and allows those users to interact with their allocated funds. By using novel off-chain technology, the Liquidity.Network solves current payment channel's most pressing problems: user funds are no longer locked up between two users, necessary routing is significantly reduced and payment channels can be REVIVE'ed with our novel REVIVE protocol. The Liquidity.Network therefore add
            </p>
          </div>
        </div>
      </div>

    </div>











<!--
    <p>Now that economic incentives have been introduced to evolve network consensus mechanisms, we expect to see a growing trend in their development and deployment.</p>

    <p v-for="(type, year) in consensusTypesByYear">
      In {{year}} we tracked {{type.length}} consensus mechanism{{type.length > 1 ? 's' : ''}}
    </p>
 -->




    <!-- {{Object.keys(networksByYear)}} -->

  </div>
</template>

<script>
  import _ from 'lodash'
  import Breadcrumb from '../../components/Breadcrumb'
  import addBreadcrumb from '../../directives/addBreadcrumb'

  export default {
    directives: {
      addBreadcrumb
    },
    components: {
      Breadcrumb
    },
    data() {
      return {
        purpose: 2,
        topics: {
          pos: {
            title: 'Proof of Stake (PoS)',
            link: 'somelink.com/foo/bar',
            content: 'e millions of users and allows those users to interact with their allocated funds. By using novel off-chain technology, the Liquidity.Network solves current payment channeled with our novel REVIVE protocol. The Liquidity.Network therefore add',
            isExpanded: false
          }
        }
      }
    },
    computed: {
      networks() { return this.$store.getters.networks },
      networksByYear() { return _.groupBy(this.networks, network => network.fields['Go Live']) },
      consensusTypesByYear() {
        let result = {}
        _.each(this.networksByYear, (networks, year) => {
          // Deduped array of consensus types tracked by year
          let consensusType = []
          _.each(networks, (network) => {
            consensusType = _.uniq(consensusType.concat(_.get(network.fields, 'Consensus Type')))
          })
          result[year] = consensusType
        })
        return result
      },
      hasDepth() {
        const foo = _.pickBy(this.topics, (topic) => topic.isExpanded)
        console.log(foo)
        return _.keys(foo).length > 0
      }
    },
    methods: {
      toggleTopic(event) {
        event.preventDefault()
        event.stopPropagation()
        const topic = event.target.attributes['x-topic'].value
        if (!topic) {
          return
        }
        // console.log(topic)
        this.topics[topic].isExpanded = !this.topics[topic].isExpanded
      }
    }
  }
</script>
