'use client'

import React, { Component } from 'react'
import geojson_data from '@/../assets/unsw-fixed.geo.json'
import { Feature, GeoJsonObject } from 'geojson'
import { MapContainer, TileLayer, Pane, GeoJSON as GeoJSONRenderer } from 'react-leaflet'
import shuffle from '@/utility/shuffle'
import { Path, GeoJSON } from 'leaflet'

const QUIZ_COMPLETE = -1

export type QuizItem = {
  id: number
  name: string
  grammar: string
  ref?: string
}

const quiz_items: QuizItem[] = geojson_data.features.map(f => {
  const { name, grammar, ref } = f.properties.tags
  return { id: f.properties.id, name, grammar, ref }
})

type MapProps = {
  on_click_feature: (id: number) => void
}

function Map({ on_click_feature }: MapProps) {
  return (
    <MapContainer
      className='flex-1'
      center={[-33.917101, 151.230981]}
      zoom={17}
      minZoom={16}
      doubleClickZoom={false}
      zoomControl={false}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" />
      <Pane name="buildings" className="buildings">
        <GeoJSONRenderer
          data={ geojson_data as GeoJsonObject }
          eventHandlers={{
            click: e => {
              const feature: Feature = e.propagatedFrom.feature
              on_click_feature(feature.properties!.id)
            }
          }} />
      </Pane>
    </MapContainer>
  )
}

export type MainState = {
  queue: QuizItem[]
  queue_index: number
}

export default class Main extends Component<{}, MainState> {
  state = {
    queue: shuffle(quiz_items).slice(0, 10),
    queue_index: 0
  }
  on_click_feature = (id: number) => {
    const { queue, queue_index } = this.state

    if (queue_index == QUIZ_COMPLETE) return

    if (id === queue[queue_index].id) {
      if (queue_index === queue.length - 1) {
        this.setState({ queue_index: QUIZ_COMPLETE })
      } else {
        this.setState({ queue_index: queue_index + 1 })
      }
    }
  }
  render() {
    const { queue, queue_index } = this.state
    const item = queue_index !== QUIZ_COMPLETE ? queue[queue_index] : null

    const message = item == null
      ? 'Congrats! You have identified all of the buildings.'
      : `Where ${ item.grammar[1] === 's' ? 'is' : 'are' } ${ item.grammar[0] === 'd' ? 'the ' : '' }${ item.name }${ item.ref != null ? ' (' + item.ref + ')' : '' }? (Progess: ${ queue_index }/${ queue.length })`

    return (
      <div className="flex flex-col items-stretch flex-1">
        <div className="self-center mb-4">{ message }</div>
        <Map on_click_feature={this.on_click_feature} />
      </div>
    )
  }
}
