import './bootstrap';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import AppNavbar from './components/AppNavbar';
import ContributionSummary from './components/ContributionSummary';
import AppFooter from './components/AppFooter';

function App() {

    const contributions = [
        {
            title: 'GeekQuest Domain',
            description: 'We need a domain for GeekQuest at geekquest.mw',
            isOpenToContribution: true,
            totalContributed: 68000,
            totalContributors: 13
        },
        {
            title: 'GeekQuest Hosting',
            description: 'We need a hosting for the domain at geekquest.mw',
            isOpenToContribution: true,
            totalContributed: 28000,
            totalContributors: 13
        }
    ]

    let contributionSummaryList = contributions.map(c => <ContributionSummary key={c.title} project={c} />)

    return (
        <ChakraProvider>
            <AppNavbar />
            <div className="container">
                {contributionSummaryList}
            </div>
            <AppFooter />
        </ChakraProvider>
    )
}

ReactDOM.createRoot(document.getElementById('kontiApp')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)