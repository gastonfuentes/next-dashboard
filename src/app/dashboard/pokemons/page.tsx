import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon-response';
import { PokemonsResponse } from '../../pokemons/interfaces/pokemons-response';
import Image from 'next/image';


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemons = data.results.map(poke => ({
        id: poke.url.split('/').at(-2)!,
        name: poke.name,
    }))

    return pokemons
}



export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className='flex flex-col'>
            <div className='flex flex-wrap gap-10 items-center justify-center'>

                {pokemons.map(poke => (

                    <Image
                        key={poke.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                        width={50}
                        height={50}
                        alt={poke.name}
                        style={{ width: "100px", height: "auto" }}
                    />

                ))}


            </div>



        </div>
    );
}

