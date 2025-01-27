import React from 'react';

const Owners = () => {
  const creators = [
    {
      name: "Creator 1",
      image: "https://via.placeholder.com/150",
      description: "Passionate developer who loves creating user-friendly applications.",
      email: "creator1@example.com",
      linkedin: "https://www.linkedin.com/in/creator1",
    },
    {
      name: "Creator 2",
      image: "https://via.placeholder.com/150",
      description: "UI/UX designer dedicated to crafting intuitive interfaces.",
      email: "creator2@example.com",
      linkedin: "https://www.linkedin.com/in/creator2",
    },
    {
      name: "Creator 3",
      image: "https://via.placeholder.com/150",
      description: "Backend engineer focused on scalable and efficient systems.",
      email: "creator3@example.com",
      linkedin: "https://www.linkedin.com/in/creator3",
    },
    {
      name: "Creator 4",
      image: "https://via.placeholder.com/150",
      description: "Full-stack developer with a knack for problem-solving.",
      email: "creator4@example.com",
      linkedin: "https://www.linkedin.com/in/creator4",
    },
    {
      name: "Creator 5",
      image: "https://via.placeholder.com/150",
      description: "DevOps specialist ensuring smooth deployment pipelines.",
      email: "creator5@example.com",
      linkedin: "https://www.linkedin.com/in/creator5",
    },
  ];

  return (
    <section style={{ padding: '2rem', background: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Meet the Creators</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem' }}>
        {creators.map((creator, index) => (
          <div
            key={index}
            style={{
              width: '200px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <img
              src={creator.image}
              alt={creator.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem',
              }}
            />
            <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{creator.name}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{creator.description}</p>
            <p>
              <a
                href={`mailto:${creator.email}`}
                style={{ color: '#0073e6', textDecoration: 'none' }}
              >
                {creator.email}
              </a>
            </p>
            <p>
              <a
                href={creator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0073e6', textDecoration: 'none' }}
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Owners;
