import Head from "next/head"
import { useContext } from "react"

import { Filter, FilterDropdownPosition } from "../components/filter"
import { PokemonCard } from "../components/pokemon-card"
import { Pagination } from "../components/pagination"
import { useCardPagination } from "../utils/usePagination"
import { ShoppingCartOverlay } from "../components/shopping-cart-overlay"
import { SearchBar } from "../components/searchbar"
import { ShoppingCartButton } from "../components/shopping-cart-button"
import { CartContext } from "../utils/cart"

const Home = () => {
  const {
    cards,
    pageIndex,
    setPageIndex,
    pageCount,
    filter: { sets, types, rarities, setFilter, handleNameSearch },
  } = useCardPagination()
  const { setOpenCartStatus } = useContext(CartContext)

  return (
    <div className="relative">
      <Head>
        <title>Pokemon Market</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container px-4 py-2 sm:px-auto mx-auto w-full divide-y divide-white-darker">
        {/* Header Section */}
        <header className="flex flex-wrap md:flex-nowrap justify-between my-2 gap-4">
          <h1 className="order-1 text-2xl font-medium flex items-center md:flex-grow md:w-full">
            Pokemon market
          </h1>
          <SearchBar
            onChange={text => handleNameSearch(text)}
            className="order-3 md:order-2 flex-grow md:flex-grow-0 md:flex-shrink w-full md:w-6/12 flex items-center"
          />
          <div className="order-2 md:order-3 flex items-center justify-end">
            <ShoppingCartButton onClick={() => setOpenCartStatus(true)} />
          </div>
        </header>

        {/* Main Section */}
        <main>
          <div className="flex flex-wrap justify-between items-center">
            <h1 className="text-xl my-8 w-full md:w-auto">Choose card</h1>
            <div className="flex gap-2">
              {sets && (
                <Filter
                  name="Set"
                  data={sets.data.map(set => set.name).sort()}
                  onUpdateFilter={value =>
                    setFilter(prev => ({ ...prev, set: value }))
                  }
                />
              )}
              {rarities && (
                <Filter
                  name="Rarity"
                  data={rarities.data}
                  onUpdateFilter={value =>
                    setFilter(prev => ({ ...prev, rarity: value }))
                  }
                />
              )}
              {types && (
                <Filter
                  name="Type"
                  data={types.data}
                  position={FilterDropdownPosition.Right}
                  onUpdateFilter={value =>
                    setFilter(prev => ({ ...prev, type: value }))
                  }
                />
              )}
            </div>
          </div>

          <Pagination
            pageCount={pageCount}
            pageIndex={pageIndex}
            setPage={setPageIndex}
          />

          {cards ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              {cards.data.map(card => (
                <PokemonCard key={card.id} card={card} />
              ))}
            </div>
          ) : (
            <div className="py-5 mx-auto container">...Loading</div>
          )}

          <Pagination
            pageCount={pageCount}
            pageIndex={pageIndex}
            setPage={setPageIndex}
          />
        </main>
      </div>

      {/* Shopping Cart */}
      <ShoppingCartOverlay />
    </div>
  )
}

export default Home
