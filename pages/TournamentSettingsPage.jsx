import React from 'react'

export default function TournamentSettingsPage({ tournamentData, triggerTournamentReload }) {
    return (
        <>
            <section>
                <h1>{tournamentData.tournament.name} - nastavení</h1>
                <pre>{JSON.stringify(tournamentData, null, 2)}</pre>
            </section>
        </>
    )
}
