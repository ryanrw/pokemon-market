import { PokemonCard } from "."

import { mockPokemonData } from "../../__mocks__/dataMock"

import type { Meta, Story } from "@storybook/react"

export default {
  title: "Components/PokemonCard",
  component: PokemonCard,
} as Meta

export const Primary: Story = () => (
  <div className="w-96 bg-ebony-clay p-6">
    <PokemonCard
      image={{
        url: mockPokemonData.data[0].images.large,
        alt: mockPokemonData.data[0].name,
      }}
      name={mockPokemonData.data[0].name}
      price={mockPokemonData.data[0].cardmarket.prices.averageSellPrice}
      cardTotals={mockPokemonData.data[0].set.total}
    />
  </div>
)

Primary.storyName = "1 Card on page"
Primary.parameters = {
  layout: "centered",
}

export const Secondary: Story = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-4">
    {[...Array(20)].map((_, index) => (
      <PokemonCard
        key={index}
        image={{
          url: mockPokemonData.data[0].images.large,
          alt: mockPokemonData.data[0].name,
        }}
        name={mockPokemonData.data[0].name}
        price={mockPokemonData.data[0].cardmarket.prices.averageSellPrice}
        cardTotals={mockPokemonData.data[0].set.total}
      />
    ))}
  </div>
)

Secondary.storyName = "20 Cards on page"
