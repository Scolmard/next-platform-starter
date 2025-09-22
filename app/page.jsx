// app/page.jsx

import Image from 'next/image'

export default function FormationGestionStress() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Gestion du Stress et des Émotions <br />au Travail</h1>
        <p className="text-white" style={styles.subtitle}>
          Une formation pratique pour apprendre à mieux gérer votre stress, vos émotions, <br />
          et leur impact sur votre vie professionnelle.
        </p>
      </header>

      {/* Bloc avec texte + image côte à côte */}
      <section style={styles.detailsWrapper}>
        <div style={styles.details}>
          <div style={styles.detailItem}>
            <strong>Durée :</strong> 2 jours (14 heures)
          </div>
          <div style={styles.detailItem}>
            <strong>Public concerné :</strong> Tous les salariés, managers, dirigeants
          </div>
          <div style={styles.detailItem}>
            <strong>Prérequis :</strong> Aucun
          </div>
          <div style={styles.detailItem}>
            <h2>Objectifs clés :</h2>
            <ul>
              <li>Comprendre les mécanismes du stress</li>
              <li>Identifier ses émotions et leur impact</li>
              <li>Mettre en place des techniques de relaxation et de gestion émotionnelle</li>
              <li>Améliorer la communication en situation de tension</li>
            </ul>
          </div>
        </div>

        <div style={styles.imageContainer}>
          <Image 
            src="/images/stress%20au%20travail.jpg"
            alt="Stress au travail"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section style={styles.programme}>
        <h2>Programme</h2>
        <ol>
          <li>Introduction : définitions et concepts</li>
          <li>Les causes et symptômes du stress professionnel</li>
          <li>Reconnaissance et expression des émotions</li>
          <li>Techniques de gestion : respiration, pleine conscience, structuration du temps</li>
          <li>Communication assertive et gestion des conflits</li>
          <li>Mise en situation / exercices pratiques</li>
        </ol>
      </section>

      <section style={styles.intervenants}>
        <h2>Intervenants</h2>
        <p>Experts en psychologie du travail, coachs certifiés.</p>
      </section>

      <section className="text-black" style={styles.inscription}>
        <h2>Inscription & Informations pratiques</h2>
        <p>Coût de la formation : 1 200 € TTC</p>
        <p>Dates : à définir selon planning</p>
        <p>Lieu : Formation en présentiel / en ligne possible</p>
      </section>
    </main>
  )
}

const styles = {
  main: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
  },
  detailsWrapper: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    borderTop: '1px solid #ddd',
    paddingTop: '1rem',
  },
  details: {
    flex: 1,
  },
  detailItem: {
    marginBottom: '0.75rem',
  },
  imageContainer: {
    flexShrink: 0,
  },
  programme: {
    marginBottom: '2rem',
  },
  intervenants: {
    marginBottom: '2rem',
  },
  inscription: {
    marginBottom: '2rem',
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '5px',
  },
}
