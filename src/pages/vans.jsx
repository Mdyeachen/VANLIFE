import { Link, useSearchParams, useLoaderData, Await } from "react-router-dom";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const loaderDataPromise = useLoaderData();

  return (
    <>
      <section className="vans-header pt-6">
        <div className="container">
          <h1 className="text-2xl font-bold">Explore our van options</h1>
        </div>
      </section>

      <Await resolve={loaderDataPromise.vans}>
        {(loaderData) => {
          const vanDetails = loaderData?.vans || [];
          const filterType = searchParams.getAll("type") || [];
          const uniqueSearchType = [...new Set(vanDetails.map(van => van.type))];

          // Filter vans based on search params
          const filterVansDetails = filterType.length > 0
            ? vanDetails.filter(van => van?.type && filterType.includes(van.type))
            : vanDetails;

          // Handle filter button clicks
          const handleFilterBtn = (btnType) => {
            const newType = filterType.includes(btnType)
              ? filterType.filter(type => type !== btnType)
              : [...filterType, btnType];

            setSearchParams(newType.length ? { type: newType } : {});
          };

          // Render filter buttons
          const filterBtn = uniqueSearchType.map((btn, index) => (
            <button
              key={index}
              className={`filterBtn ${filterType.includes(btn) ? "active" : ""}`}
              onClick={() => handleFilterBtn(btn)}
            >
              {btn.toUpperCase()}
            </button>
          ));

          // Render van elements
          const vanElement = filterVansDetails.map(van => (
            <div key={van.id} className="van halfWidth">
              <Link
                state={{ search: searchParams.toString() }}
                to={`/vans/${van.id}`}
              >
                <img className="rounded" src={van.imageUrl} alt={van.name} />
                <div className="van-content font-bold flexCol relative gap-1.5 py-2">
                  <h2 className="text-sm">{van.name}</h2>
                  <div className="van-price flexCol text-sm leading-3 font-light absolute top-2 right-0">
                    <span className="font-bold text-base">{van.price}</span>
                    /day
                  </div>
                  <button type="button" className="bg-cyan-950 text-[12px] uppercase text-white py-0 px-6 rounded w-fit">
                    {van.type}
                  </button>
                </div>
              </Link>
            </div>
          ));

          return (
            <>
              <section className="vans-filter pb-6">
                <div className="container flexRow gap-2 py-2">
                  {filterBtn}
                  {filterType.length > 0 && (
                    <button
                      className="filterBtn clear"
                      onClick={() => setSearchParams({})}
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </section>

              <section className="vans">
                <div className="container flexRow gap-3 justify-between">
                  {vanElement}
                </div>
              </section>
            </>
          );
        }}
      </Await>
    </>
  );
}

export default Vans;