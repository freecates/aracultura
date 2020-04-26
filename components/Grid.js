import Link from 'next/link';

const Grid = ({ data }) => {
  return (
    <div className='grid'>
      {data
        .sort((a, b) => {
          if (a.datePublished > b.datePublished) {
            return -1;
          }
          if (a.datePublished < b.datePublished) {
            return 1;
          }
          return 0;
        })
        .map((c, id) => (
          <div className='card' key={c.id} id={id}>
            <header>
              {!c.acf.imatge ? null : (
                <img
                  loading='lazy'
                  src={c.acf.imatge.url}
                  alt={c.title.rendered}
                />
              )}
              <h3>
                <span dangerouslySetInnerHTML={{ __html: c.title.rendered }} />
                &rarr;
              </h3>
            </header>
            {!c.acf.per_que ? null : (
              <>
                <h4>{c.acf.per_que && `Per què`}</h4>
                <p>
                  {c.acf.per_que.substring(0, 120)}...{' '}
                  <Link href={`/${c.type}/${c.id}`}>
                    <a title={`Veure la fitxa de: ${c.title.rendered}`}>[+]</a>
                  </Link>
                </p>
              </>
            )}
            {c.type == 'post' ? (
              <>
                <p>
                  {c.acf.destacat} ...{' '}
                  <Link href={`/${c.type}/${c.id}`}>
                    <a title={`Veure: ${c.title.rendered}`}>[+]</a>
                  </Link>
                </p>
              </>
            ) : null}
          </div>
        ))}
      <style jsx global>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 960px;
          margin-top: 3rem;
          background: rgba(112, 168, 59, 0.1);
          border-radius: 10px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #70a83b;
          border-radius: 10px;
          transition: background 1.15s ease;
        }

        .card:hover {
          background: #ffffff;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.25rem;
          color: #70a83b;
        }

        .card p {
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card p:last-child {
          margin: 0;
        }

        .card img {
          max-width: 50px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Grid;
