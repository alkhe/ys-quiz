'use client'

import React, { Component, ReactNode, useState, useEffect, useCallback } from 'react'
import geojson_data from '@/../assets/unsw-fixed.geo.json'
import { Feature, GeoJsonObject } from 'geojson'
import { MapContainer, TileLayer, Pane, GeoJSON as GeoJSONRenderer, useMap } from 'react-leaflet'
import { Map as LeafletMap, LatLngTuple } from 'leaflet'
import shuffle from '@/utility/shuffle'
import clamp from '@/utility/clamp'
import { useMediaQuery } from 'react-responsive'

const QUIZ_COMPLETE = -1
const UNSW_COORDS: LatLngTuple = [-33.917101, 151.230981]

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

type MapExtractorProps = {
  map_ready: (map: LeafletMap) => void
}

function MapExtractor({ map_ready }: MapExtractorProps) {
  const map: LeafletMap = useMap()
  useEffect(() => map_ready(map), [map])
  return (<></>)
}

type MapProps = {
  on_click_feature: (id: number) => void
  zoom: number
  map_ready: (map: LeafletMap) => void
}

function Map({ on_click_feature, zoom, map_ready }: MapProps) {
  return (
    <MapContainer
      className='flex-1'
      center={UNSW_COORDS}
      zoom={zoom}
      minZoom={15}
      zoomSnap={.25}
      doubleClickZoom={false}
      zoomControl={false}>
      <MapExtractor map_ready={map_ready} />
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

export type QuizProps = {
  quiz?: QuizItem[]
  clear_quiz: () => void
  new_quiz: (items: number) => void
}

const responsive_zoom = [15.5, 16.25, 17]

function Quiz({ quiz, clear_quiz, new_quiz }: QuizProps) {
  const [quiz_index, set_quiz_index] = useState(0)
  const [map, set_map] = useState<LeafletMap | null>(null)
  const [quiz_size, set_quiz_size] = useState(10)

  const is_large = useMediaQuery({ query: '(min-width: 1024px)' })
  const is_medium = useMediaQuery({ query: '(min-width: 768px)' })
  const screen_width = is_large ? 2
    : is_medium ? 1
    : 0

  const [zoom, set_zoom] = useState(responsive_zoom[screen_width])

  const on_click_feature = useCallback((id: number) => {
    if (quiz == null || quiz_index == QUIZ_COMPLETE) return

    if (id === quiz[quiz_index].id) {
      if (quiz_index === quiz.length - 1) {
        set_quiz_index(QUIZ_COMPLETE)
      } else {
        set_quiz_index(quiz_index + 1)
      }
    }
  }, [quiz, quiz_index])

  const play_again = () => {
    set_quiz_index(0)
    clear_quiz()
    reset_view()
  }

  const reset_view = () => {
    if (map == null) return
    map.setZoom(zoom)
    map.setView(UNSW_COORDS)
  }

  useEffect(reset_view, [zoom])

  useEffect(() => {
    if (map == null) return
    set_zoom(responsive_zoom[screen_width])
  }, [screen_width])

  let message: ReactNode = <></>

  if (quiz == null) {
    message = <>
      How many locations would you like to test?
      <form className="inline-block" onSubmit={() => new_quiz(quiz_size)}>
        <input className="ml-4 px-2" type="number" min={1} max={quiz_items.length} value={quiz_size} onChange={e => set_quiz_size(clamp(1, quiz_items.length, Number(e.target.value)))} />
        <button type="submit" className="ml-2 px-2">Go</button>
      </form>
    </>
  } else {
    const item = quiz_index === QUIZ_COMPLETE ? null : quiz[quiz_index]

    message = item == null
      ? <>
          Congrats! You have identified all of the buildings. <a onClick={play_again}>Play Again?</a>
        </>
      : <>
        Where { item.grammar[1] === 's' ? 'is' : 'are' } { item.grammar[0] === 'd' ? 'the ' : '' }{ item.name }{ item.ref != null ? ' (' + item.ref + ')' : '' }? <span className="font-bold">(Progress: { quiz_index }/{ quiz.length })</span>
      </>
  }

  return (
    <div className="flex flex-col items-stretch flex-1"
      style={{
        height: window.innerHeight
      }}>
      <div className="self-center my-4 mx-4 md:mx-0">{ message }</div>
      <Map on_click_feature={on_click_feature} zoom={zoom} map_ready={set_map} />
    </div>
  )
}

export type MainState = {
  quiz?: QuizItem[]
}

export default class Main extends Component<{}, MainState> {
  state: MainState = {}
  new_quiz = (items: number) => {
    this.setState({
      quiz: shuffle(quiz_items).slice(0, items)
    })
  }
  clear_quiz = () => {
    this.setState({ quiz: undefined })
  }
  render() {
    return <Quiz quiz={ this.state.quiz } clear_quiz={this.clear_quiz} new_quiz={this.new_quiz} />
  }
}

