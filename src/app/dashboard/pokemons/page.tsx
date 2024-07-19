
import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';





const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemons = data.results.map(poke => ({
        id: poke.url.split('/').at(-2)!,
        name: poke.name,
    }))

    /* throw new Error('esto es un error que no deberia suceder') */

    return pokemons
}



export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className='flex flex-col'>

            <span className='text-2xl my-2'>Listado de pokemons <small>estaticos</small></span>

            <PokemonGrid pokemons={pokemons} />



        </div>
    );
}

