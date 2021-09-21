import React from 'react'
import api from '../../services/api/api'

export async function getStaticPaths() {
  const response = await api.get('/volumes')

  const ids = response.data
  const paths = ids.map((path) => {
    return {
      params: {
        id: `${path.id}`,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const { data: volume } = await api.get(`volumes/${id}`)

  return {
    props: volume,
  }
}

export default function Domains(props) {
  return <div>domain: {props.volume}</div>
}
