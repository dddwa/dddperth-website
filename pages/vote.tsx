import Router from 'next/router'
import * as React from 'react'
import { withPageMetadata } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Page from '../layouts/main'

class VotePage extends React.Component {
    static getInitialProps({ res }) {
        const dates = getConferenceDates(Conference)
        if (!dates.VotingOpen) {
            if (res) {
                res.writeHead(302, {
                    Location: '/',
                })
                res.end()
                res.finished = true
            } else {
                Router.replace('/')
            }
        }
        return {}
    }
    render() {
        return (
            <Page title="Vote" hideBanner={true} description={Conference.Name + ' voting page.'}>
                <div className="container">
                    <h1>Voting</h1>

                    <p>Voting is not yet ready; stay tuned!</p>
                </div>
            </Page>
        )
    }
}

export default withPageMetadata(VotePage)
