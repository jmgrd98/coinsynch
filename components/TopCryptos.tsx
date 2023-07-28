'use client'

export default function TopCryptos() {
    return (
        <section className='flex flex-col items-center p-10'>
            <h2 className='text-gray-500 font-bold text-3xl text-center'>Top Cryptos</h2>

            <table className='w-full mt-10'>
                <thead className='font-normal'>
                <tr className='text-gray-500 text-left font-normal'>
                    <th className='p-2 font-normal'>#</th>
                    <th className='p-2 font-normal'>Crypto</th>
                    <th className='p-2 font-normal'>Price</th>
                    <th className='p-2 font-normal'>Change</th>
                    <th className='p-2 font-normal'>Trade</th>
                </tr>
                </thead>

                <tbody>
                <tr className='text-gray-500 text-left'>
                    <td className='p-2'>1</td>
                    <td className='p-2'>Bitcoin</td>
                    <td className='p-2'>R$ 300.000,00</td>
                    <td className='p-2'>+ 0.00%</td>
                    <td className='p-2'>Buy</td>
                </tr>
                <tr className='text-gray-500 text-left'>
                    <td className='p-2'>2</td>
                    <td className='p-2'>Ethereum</td>
                    <td className='p-2'>R$ 300.000,00</td>
                    <td className='p-2'>+ 0.00%</td>
                    <td className='p-2'>Buy</td>
                </tr>
                <tr className='text-gray-500 text-left'>
                    <td className='p-2'>3</td>
                    <td className='p-2'>Cardano</td>
                    <td className='p-2'>R$ 300.000,00</td>
                    <td className='p-2'>+ 0.00%</td>
                    <td className='p-2'>Buy</td>
                </tr>
                <tr className='text-gray-500 text-left'>
                    <td className='p-2'>4</td>
                    <td className='p-2'>Binance Coin</td>
                    <td className='p-2'>R$ 300.000,00</td>
                    <td className='p-2'>+ 0.00%</td>
                    <td className='p-2'>Buy</td>
                </tr>
                <tr className='text-gray-500 text-left'>
                    <td className='p-2'>5</td>
                    <td className='p-2'>Tether</td>
                    <td className='p-2'>R$ 300.000,00</td>
                    <td className='p-2'>+ 0.00%</td>
                    <td className='p-2'>Buy</td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}