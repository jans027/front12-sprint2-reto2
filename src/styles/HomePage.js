import styled from "styled-components";





export const HomeStyled = styled.main`
            h3{
                width: clamp(360px, 60vw, 800px);
                margin:1em auto;
                font-size: 1.5em;
            }
            a{
                color: gray;
                active{
                    color: red;
                }
            }
            footer{
                height: 80px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 1em;
                color: gray;
                font-size: 1.6em;
                bottom: 0;
                
            }
`

export const Section1 = styled.section`
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1em .8em;
            background:linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
            box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);
            border-radius: 0 0 1.5em 1.5em;
            div{
                line-height: 1.2em;
                padding: 5em 0 0 0;
            }

`
export const Div1 = styled.div`
            font-size: 1.3em;
            display: flex;
            align-items: center;
            width: 7em;
            span{
                margin-right:.5em;
                color: #EF9014;
            }
            p{
                margin-right:2em;
            }

`

export const Section2 = styled.section`

            margin: 0 auto;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            width: clamp(370px, 60vw, 800px);
`
export const Card1 = styled.div`
            div{
                padding:.5em;
                line-break:.1em;
                span{
                    font-size: 1.2em;
                }
                p{
                    margin: 0;
                    font-size: .8em;
                }
            }

`

export const Section3 = styled.section`
                width: clamp(360px, 60vw, 800px);
                margin: 0 auto;
                
`
export const Card2 = styled.div`
                background-color: aliceblue;
                border: 1px solid aqua;
                border-radius: 2em;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 .5em;
                margin:.8em 0;
                img{
                    width: 3em;
                } 
                span{
                    font-size: 1.3em;
                }
                p{
                    width: 250px;
                }
                h6{
                    width: 3em;
                    font-size: 1em;
                    color: aqua;
                }
`











