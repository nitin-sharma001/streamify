import React, { useEffect } from 'react'

import {openai} from '../utils/OpenAI'
const useGPT = () => {

        async function main() {
                const chatCompletion = await openai.chat.completions.create({
                  messages: [{ role: 'user', content: 'give me name of 5 best movies' }],
                  model: 'gpt-3.5-turbo',
                }).then((res) => {
                        console.log(res)
                }).catch((err) => {
                        console.log(err)
                })

                console.log(chatCompletion)
        }
              
        useEffect(() => {
                main();
        }, [])
}

export default useGPT