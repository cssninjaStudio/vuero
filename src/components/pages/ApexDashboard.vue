<script setup lang="ts">
import moment from 'moment'

import { themeColors } from '/@src/composition/state/themeColors'
const dataSeries = [
  [
    {
      date: '2014-01-01',
      value: 20000000,
    },
    {
      date: '2014-01-02',
      value: 10379978,
    },
    {
      date: '2014-01-03',
      value: 30493749,
    },
    {
      date: '2014-01-04',
      value: 10785250,
    },
    {
      date: '2014-01-05',
      value: 33901904,
    },
    {
      date: '2014-01-06',
      value: 11576838,
    },
    {
      date: '2014-01-07',
      value: 14413854,
    },
    {
      date: '2014-01-08',
      value: 15177211,
    },
    {
      date: '2014-01-09',
      value: 16622100,
    },
    {
      date: '2014-01-10',
      value: 17381072,
    },
    {
      date: '2014-01-11',
      value: 18802310,
    },
    {
      date: '2014-01-12',
      value: 15531790,
    },
    {
      date: '2014-01-13',
      value: 15748881,
    },
    {
      date: '2014-01-14',
      value: 18706437,
    },
    {
      date: '2014-01-15',
      value: 19752685,
    },
    {
      date: '2014-01-16',
      value: 21016418,
    },
    {
      date: '2014-01-17',
      value: 25622924,
    },
    {
      date: '2014-01-18',
      value: 25337480,
    },
    {
      date: '2014-01-19',
      value: 22258882,
    },
    {
      date: '2014-01-20',
      value: 23829538,
    },
    {
      date: '2014-01-21',
      value: 24245689,
    },
    {
      date: '2014-01-22',
      value: 26429711,
    },
    {
      date: '2014-01-23',
      value: 26259017,
    },
    {
      date: '2014-01-24',
      value: 25396183,
    },
    {
      date: '2014-01-25',
      value: 23107346,
    },
    {
      date: '2014-01-26',
      value: 28659852,
    },
    {
      date: '2014-01-27',
      value: 25270783,
    },
    {
      date: '2014-01-28',
      value: 26270783,
    },
    {
      date: '2014-01-29',
      value: 27270783,
    },
    {
      date: '2014-01-30',
      value: 28270783,
    },
    {
      date: '2014-01-31',
      value: 29270783,
    },
    {
      date: '2014-02-01',
      value: 30270783,
    },
    {
      date: '2014-02-02',
      value: 31270783,
    },
    {
      date: '2014-02-03',
      value: 32270783,
    },
    {
      date: '2014-02-04',
      value: 33270783,
    },
    {
      date: '2014-02-05',
      value: 28270783,
    },
    {
      date: '2014-02-06',
      value: 27270783,
    },
    {
      date: '2014-02-07',
      value: 35270783,
    },
    {
      date: '2014-02-08',
      value: 34270783,
    },
    {
      date: '2014-02-09',
      value: 28270783,
    },
    {
      date: '2014-02-10',
      value: 35270783,
    },
    {
      date: '2014-02-11',
      value: 36270783,
    },
    {
      date: '2014-02-12',
      value: 34127078,
    },
    {
      date: '2014-02-13',
      value: 33124078,
    },
    {
      date: '2014-02-14',
      value: 36227078,
    },
    {
      date: '2014-02-15',
      value: 37827078,
    },
    {
      date: '2014-02-16',
      value: 36427073,
    },
    {
      date: '2014-02-17',
      value: 37570783,
    },
    {
      date: '2014-02-18',
      value: 38627073,
    },
    {
      date: '2014-02-19',
      value: 37727078,
    },
    {
      date: '2014-02-20',
      value: 38827073,
    },
    {
      date: '2014-02-21',
      value: 40927078,
    },
    {
      date: '2014-02-22',
      value: 41027078,
    },
    {
      date: '2014-02-23',
      value: 42127073,
    },
    {
      date: '2014-02-24',
      value: 43220783,
    },
    {
      date: '2014-02-25',
      value: 44327078,
    },
    {
      date: '2014-02-26',
      value: 40427078,
    },
    {
      date: '2014-02-27',
      value: 41027078,
    },
    {
      date: '2014-02-28',
      value: 45627078,
    },
    {
      date: '2014-03-01',
      value: 44727078,
    },
    {
      date: '2014-03-02',
      value: 44227078,
    },
    {
      date: '2014-03-03',
      value: 45227078,
    },
    {
      date: '2014-03-04',
      value: 46027078,
    },
    {
      date: '2014-03-05',
      value: 46927078,
    },
    {
      date: '2014-03-06',
      value: 47027078,
    },
    {
      date: '2014-03-07',
      value: 46227078,
    },
    {
      date: '2014-03-08',
      value: 47027078,
    },
    {
      date: '2014-03-09',
      value: 48027078,
    },
    {
      date: '2014-03-10',
      value: 47027078,
    },
    {
      date: '2014-03-11',
      value: 47027078,
    },
    {
      date: '2014-03-12',
      value: 48017078,
    },
    {
      date: '2014-03-13',
      value: 48077078,
    },
    {
      date: '2014-03-14',
      value: 48087078,
    },
    {
      date: '2014-03-15',
      value: 48017078,
    },
    {
      date: '2014-03-16',
      value: 48047078,
    },
    {
      date: '2014-03-17',
      value: 48067078,
    },
    {
      date: '2014-03-18',
      value: 48077078,
    },
    {
      date: '2014-03-19',
      value: 48027074,
    },
    {
      date: '2014-03-20',
      value: 48927079,
    },
    {
      date: '2014-03-21',
      value: 48727071,
    },
    {
      date: '2014-03-22',
      value: 48127072,
    },
    {
      date: '2014-03-23',
      value: 48527072,
    },
    {
      date: '2014-03-24',
      value: 48627027,
    },
    {
      date: '2014-03-25',
      value: 48027040,
    },
    {
      date: '2014-03-26',
      value: 48027043,
    },
    {
      date: '2014-03-27',
      value: 48057022,
    },
    {
      date: '2014-03-28',
      value: 49057022,
    },
    {
      date: '2014-03-29',
      value: 50057022,
    },
    {
      date: '2014-03-30',
      value: 51057022,
    },
    {
      date: '2014-03-31',
      value: 52057022,
    },
    {
      date: '2014-04-01',
      value: 53057022,
    },
    {
      date: '2014-04-02',
      value: 54057022,
    },
    {
      date: '2014-04-03',
      value: 52057022,
    },
    {
      date: '2014-04-04',
      value: 55057022,
    },
    {
      date: '2014-04-05',
      value: 58270783,
    },
    {
      date: '2014-04-06',
      value: 56270783,
    },
    {
      date: '2014-04-07',
      value: 55270783,
    },
    {
      date: '2014-04-08',
      value: 58270783,
    },
    {
      date: '2014-04-09',
      value: 59270783,
    },
    {
      date: '2014-04-10',
      value: 60270783,
    },
    {
      date: '2014-04-11',
      value: 61270783,
    },
    {
      date: '2014-04-12',
      value: 62270783,
    },
    {
      date: '2014-04-13',
      value: 63270783,
    },
    {
      date: '2014-04-14',
      value: 64270783,
    },
    {
      date: '2014-04-15',
      value: 65270783,
    },
    {
      date: '2014-04-16',
      value: 66270783,
    },
    {
      date: '2014-04-17',
      value: 67270783,
    },
    {
      date: '2014-04-18',
      value: 68270783,
    },
    {
      date: '2014-04-19',
      value: 69270783,
    },
    {
      date: '2014-04-20',
      value: 70270783,
    },
    {
      date: '2014-04-21',
      value: 71270783,
    },
    {
      date: '2014-04-22',
      value: 72270783,
    },
    {
      date: '2014-04-23',
      value: 73270783,
    },
    {
      date: '2014-04-24',
      value: 74270783,
    },
    {
      date: '2014-04-25',
      value: 75270783,
    },
    {
      date: '2014-04-26',
      value: 76660783,
    },
    {
      date: '2014-04-27',
      value: 77270783,
    },
    {
      date: '2014-04-28',
      value: 78370783,
    },
    {
      date: '2014-04-29',
      value: 79470783,
    },
    {
      date: '2014-04-30',
      value: 80170783,
    },
  ],
  [
    {
      date: '2014-01-01',
      value: 150000000,
    },
    {
      date: '2014-01-02',
      value: 160379978,
    },
    {
      date: '2014-01-03',
      value: 170493749,
    },
    {
      date: '2014-01-04',
      value: 160785250,
    },
    {
      date: '2014-01-05',
      value: 167391904,
    },
    {
      date: '2014-01-06',
      value: 161576838,
    },
    {
      date: '2014-01-07',
      value: 161413854,
    },
    {
      date: '2014-01-08',
      value: 152177211,
    },
    {
      date: '2014-01-09',
      value: 140762210,
    },
    {
      date: '2014-01-10',
      value: 144381072,
    },
    {
      date: '2014-01-11',
      value: 154352310,
    },
    {
      date: '2014-01-12',
      value: 165531790,
    },
    {
      date: '2014-01-13',
      value: 175748881,
    },
    {
      date: '2014-01-14',
      value: 187064037,
    },
    {
      date: '2014-01-15',
      value: 197520685,
    },
    {
      date: '2014-01-16',
      value: 210176418,
    },
    {
      date: '2014-01-17',
      value: 196122924,
    },
    {
      date: '2014-01-18',
      value: 207337480,
    },
    {
      date: '2014-01-19',
      value: 200258882,
    },
    {
      date: '2014-01-20',
      value: 186829538,
    },
    {
      date: '2014-01-21',
      value: 192456897,
    },
    {
      date: '2014-01-22',
      value: 204299711,
    },
    {
      date: '2014-01-23',
      value: 192759017,
    },
    {
      date: '2014-01-24',
      value: 203596183,
    },
    {
      date: '2014-01-25',
      value: 208107346,
    },
    {
      date: '2014-01-26',
      value: 196359852,
    },
    {
      date: '2014-01-27',
      value: 192570783,
    },
    {
      date: '2014-01-28',
      value: 177967768,
    },
    {
      date: '2014-01-29',
      value: 190632803,
    },
    {
      date: '2014-01-30',
      value: 203725316,
    },
    {
      date: '2014-01-31',
      value: 218226177,
    },
    {
      date: '2014-02-01',
      value: 210698669,
    },
    {
      date: '2014-02-02',
      value: 217640656,
    },
    {
      date: '2014-02-03',
      value: 216142362,
    },
    {
      date: '2014-02-04',
      value: 201410971,
    },
    {
      date: '2014-02-05',
      value: 196704289,
    },
    {
      date: '2014-02-06',
      value: 190436945,
    },
    {
      date: '2014-02-07',
      value: 178891686,
    },
    {
      date: '2014-02-08',
      value: 171613962,
    },
    {
      date: '2014-02-09',
      value: 157579773,
    },
    {
      date: '2014-02-10',
      value: 158677098,
    },
    {
      date: '2014-02-11',
      value: 147129977,
    },
    {
      date: '2014-02-12',
      value: 151561876,
    },
    {
      date: '2014-02-13',
      value: 151627421,
    },
    {
      date: '2014-02-14',
      value: 143543872,
    },
    {
      date: '2014-02-15',
      value: 136581057,
    },
    {
      date: '2014-02-16',
      value: 135560715,
    },
    {
      date: '2014-02-17',
      value: 122625263,
    },
    {
      date: '2014-02-18',
      value: 112091484,
    },
    {
      date: '2014-02-19',
      value: 98810329,
    },
    {
      date: '2014-02-20',
      value: 99882912,
    },
    {
      date: '2014-02-21',
      value: 94943095,
    },
    {
      date: '2014-02-22',
      value: 104875743,
    },
    {
      date: '2014-02-23',
      value: 116383678,
    },
    {
      date: '2014-02-24',
      value: 125028841,
    },
    {
      date: '2014-02-25',
      value: 123967310,
    },
    {
      date: '2014-02-26',
      value: 133167029,
    },
    {
      date: '2014-02-27',
      value: 128577263,
    },
    {
      date: '2014-02-28',
      value: 115836969,
    },
    {
      date: '2014-03-01',
      value: 119264529,
    },
    {
      date: '2014-03-02',
      value: 109363374,
    },
    {
      date: '2014-03-03',
      value: 113985628,
    },
    {
      date: '2014-03-04',
      value: 114650999,
    },
    {
      date: '2014-03-05',
      value: 110866108,
    },
    {
      date: '2014-03-06',
      value: 96473454,
    },
    {
      date: '2014-03-07',
      value: 104075886,
    },
    {
      date: '2014-03-08',
      value: 103568384,
    },
    {
      date: '2014-03-09',
      value: 101534883,
    },
    {
      date: '2014-03-10',
      value: 115825447,
    },
    {
      date: '2014-03-11',
      value: 126133916,
    },
    {
      date: '2014-03-12',
      value: 116502109,
    },
    {
      date: '2014-03-13',
      value: 130169411,
    },
    {
      date: '2014-03-14',
      value: 124296886,
    },
    {
      date: '2014-03-15',
      value: 126347399,
    },
    {
      date: '2014-03-16',
      value: 131483669,
    },
    {
      date: '2014-03-17',
      value: 142811333,
    },
    {
      date: '2014-03-18',
      value: 129675396,
    },
    {
      date: '2014-03-19',
      value: 115514483,
    },
    {
      date: '2014-03-20',
      value: 117630630,
    },
    {
      date: '2014-03-21',
      value: 122340239,
    },
    {
      date: '2014-03-22',
      value: 132349091,
    },
    {
      date: '2014-03-23',
      value: 125613305,
    },
    {
      date: '2014-03-24',
      value: 135592466,
    },
    {
      date: '2014-03-25',
      value: 123408762,
    },
    {
      date: '2014-03-26',
      value: 111991454,
    },
    {
      date: '2014-03-27',
      value: 116123955,
    },
    {
      date: '2014-03-28',
      value: 112817214,
    },
    {
      date: '2014-03-29',
      value: 113029590,
    },
    {
      date: '2014-03-30',
      value: 108753398,
    },
    {
      date: '2014-03-31',
      value: 99383763,
    },
    {
      date: '2014-04-01',
      value: 100151737,
    },
    {
      date: '2014-04-02',
      value: 94985209,
    },
    {
      date: '2014-04-03',
      value: 82913669,
    },
    {
      date: '2014-04-04',
      value: 78748268,
    },
    {
      date: '2014-04-05',
      value: 63829135,
    },
    {
      date: '2014-04-06',
      value: 78694727,
    },
    {
      date: '2014-04-07',
      value: 80868994,
    },
    {
      date: '2014-04-08',
      value: 93799013,
    },
    {
      date: '2014-04-09',
      value: 99042416,
    },
    {
      date: '2014-04-10',
      value: 97298692,
    },
    {
      date: '2014-04-11',
      value: 83353499,
    },
    {
      date: '2014-04-12',
      value: 71248129,
    },
    {
      date: '2014-04-13',
      value: 75253744,
    },
    {
      date: '2014-04-14',
      value: 68976648,
    },
    {
      date: '2014-04-15',
      value: 71002284,
    },
    {
      date: '2014-04-16',
      value: 75052401,
    },
    {
      date: '2014-04-17',
      value: 83894030,
    },
    {
      date: '2014-04-18',
      value: 90236528,
    },
    {
      date: '2014-04-19',
      value: 99739114,
    },
    {
      date: '2014-04-20',
      value: 96407136,
    },
    {
      date: '2014-04-21',
      value: 108323177,
    },
    {
      date: '2014-04-22',
      value: 101578914,
    },
    {
      date: '2014-04-23',
      value: 115877608,
    },
    {
      date: '2014-04-24',
      value: 112088857,
    },
    {
      date: '2014-04-25',
      value: 112071353,
    },
    {
      date: '2014-04-26',
      value: 101790062,
    },
    {
      date: '2014-04-27',
      value: 115003761,
    },
    {
      date: '2014-04-28',
      value: 120457727,
    },
    {
      date: '2014-04-29',
      value: 118253926,
    },
    {
      date: '2014-04-30',
      value: 117956992,
    },
  ],
  [
    {
      date: '2014-01-01',
      value: 50000000,
    },
    {
      date: '2014-01-02',
      value: 60379978,
    },
    {
      date: '2014-01-03',
      value: 40493749,
    },
    {
      date: '2014-01-04',
      value: 60785250,
    },
    {
      date: '2014-01-05',
      value: 67391904,
    },
    {
      date: '2014-01-06',
      value: 61576838,
    },
    {
      date: '2014-01-07',
      value: 61413854,
    },
    {
      date: '2014-01-08',
      value: 82177211,
    },
    {
      date: '2014-01-09',
      value: 103762210,
    },
    {
      date: '2014-01-10',
      value: 84381072,
    },
    {
      date: '2014-01-11',
      value: 54352310,
    },
    {
      date: '2014-01-12',
      value: 65531790,
    },
    {
      date: '2014-01-13',
      value: 75748881,
    },
    {
      date: '2014-01-14',
      value: 47064037,
    },
    {
      date: '2014-01-15',
      value: 67520685,
    },
    {
      date: '2014-01-16',
      value: 60176418,
    },
    {
      date: '2014-01-17',
      value: 66122924,
    },
    {
      date: '2014-01-18',
      value: 57337480,
    },
    {
      date: '2014-01-19',
      value: 100258882,
    },
    {
      date: '2014-01-20',
      value: 46829538,
    },
    {
      date: '2014-01-21',
      value: 92456897,
    },
    {
      date: '2014-01-22',
      value: 94299711,
    },
    {
      date: '2014-01-23',
      value: 62759017,
    },
    {
      date: '2014-01-24',
      value: 103596183,
    },
    {
      date: '2014-01-25',
      value: 108107346,
    },
    {
      date: '2014-01-26',
      value: 66359852,
    },
    {
      date: '2014-01-27',
      value: 62570783,
    },
    {
      date: '2014-01-28',
      value: 77967768,
    },
    {
      date: '2014-01-29',
      value: 60632803,
    },
    {
      date: '2014-01-30',
      value: 103725316,
    },
    {
      date: '2014-01-31',
      value: 98226177,
    },
    {
      date: '2014-02-01',
      value: 60698669,
    },
    {
      date: '2014-02-02',
      value: 67640656,
    },
    {
      date: '2014-02-03',
      value: 66142362,
    },
    {
      date: '2014-02-04',
      value: 101410971,
    },
    {
      date: '2014-02-05',
      value: 66704289,
    },
    {
      date: '2014-02-06',
      value: 60436945,
    },
    {
      date: '2014-02-07',
      value: 78891686,
    },
    {
      date: '2014-02-08',
      value: 71613962,
    },
    {
      date: '2014-02-09',
      value: 107579773,
    },
    {
      date: '2014-02-10',
      value: 58677098,
    },
    {
      date: '2014-02-11',
      value: 87129977,
    },
    {
      date: '2014-02-12',
      value: 51561876,
    },
    {
      date: '2014-02-13',
      value: 51627421,
    },
    {
      date: '2014-02-14',
      value: 83543872,
    },
    {
      date: '2014-02-15',
      value: 66581057,
    },
    {
      date: '2014-02-16',
      value: 65560715,
    },
    {
      date: '2014-02-17',
      value: 62625263,
    },
    {
      date: '2014-02-18',
      value: 92091484,
    },
    {
      date: '2014-02-19',
      value: 48810329,
    },
    {
      date: '2014-02-20',
      value: 49882912,
    },
    {
      date: '2014-02-21',
      value: 44943095,
    },
    {
      date: '2014-02-22',
      value: 104875743,
    },
    {
      date: '2014-02-23',
      value: 96383678,
    },
    {
      date: '2014-02-24',
      value: 105028841,
    },
    {
      date: '2014-02-25',
      value: 63967310,
    },
    {
      date: '2014-02-26',
      value: 63167029,
    },
    {
      date: '2014-02-27',
      value: 68577263,
    },
    {
      date: '2014-02-28',
      value: 95836969,
    },
    {
      date: '2014-03-01',
      value: 99264529,
    },
    {
      date: '2014-03-02',
      value: 109363374,
    },
    {
      date: '2014-03-03',
      value: 93985628,
    },
    {
      date: '2014-03-04',
      value: 94650999,
    },
    {
      date: '2014-03-05',
      value: 90866108,
    },
    {
      date: '2014-03-06',
      value: 46473454,
    },
    {
      date: '2014-03-07',
      value: 84075886,
    },
    {
      date: '2014-03-08',
      value: 103568384,
    },
    {
      date: '2014-03-09',
      value: 101534883,
    },
    {
      date: '2014-03-10',
      value: 95825447,
    },
    {
      date: '2014-03-11',
      value: 66133916,
    },
    {
      date: '2014-03-12',
      value: 96502109,
    },
    {
      date: '2014-03-13',
      value: 80169411,
    },
    {
      date: '2014-03-14',
      value: 84296886,
    },
    {
      date: '2014-03-15',
      value: 86347399,
    },
    {
      date: '2014-03-16',
      value: 31483669,
    },
    {
      date: '2014-03-17',
      value: 82811333,
    },
    {
      date: '2014-03-18',
      value: 89675396,
    },
    {
      date: '2014-03-19',
      value: 95514483,
    },
    {
      date: '2014-03-20',
      value: 97630630,
    },
    {
      date: '2014-03-21',
      value: 62340239,
    },
    {
      date: '2014-03-22',
      value: 62349091,
    },
    {
      date: '2014-03-23',
      value: 65613305,
    },
    {
      date: '2014-03-24',
      value: 65592466,
    },
    {
      date: '2014-03-25',
      value: 63408762,
    },
    {
      date: '2014-03-26',
      value: 91991454,
    },
    {
      date: '2014-03-27',
      value: 96123955,
    },
    {
      date: '2014-03-28',
      value: 92817214,
    },
    {
      date: '2014-03-29',
      value: 93029590,
    },
    {
      date: '2014-03-30',
      value: 108753398,
    },
    {
      date: '2014-03-31',
      value: 49383763,
    },
    {
      date: '2014-04-01',
      value: 100151737,
    },
    {
      date: '2014-04-02',
      value: 44985209,
    },
    {
      date: '2014-04-03',
      value: 52913669,
    },
    {
      date: '2014-04-04',
      value: 48748268,
    },
    {
      date: '2014-04-05',
      value: 23829135,
    },
    {
      date: '2014-04-06',
      value: 58694727,
    },
    {
      date: '2014-04-07',
      value: 50868994,
    },
    {
      date: '2014-04-08',
      value: 43799013,
    },
    {
      date: '2014-04-09',
      value: 4042416,
    },
    {
      date: '2014-04-10',
      value: 47298692,
    },
    {
      date: '2014-04-11',
      value: 53353499,
    },
    {
      date: '2014-04-12',
      value: 71248129,
    },
    {
      date: '2014-04-13',
      value: 75253744,
    },
    {
      date: '2014-04-14',
      value: 68976648,
    },
    {
      date: '2014-04-15',
      value: 71002284,
    },
    {
      date: '2014-04-16',
      value: 75052401,
    },
    {
      date: '2014-04-17',
      value: 83894030,
    },
    {
      date: '2014-04-18',
      value: 50236528,
    },
    {
      date: '2014-04-19',
      value: 59739114,
    },
    {
      date: '2014-04-20',
      value: 56407136,
    },
    {
      date: '2014-04-21',
      value: 108323177,
    },
    {
      date: '2014-04-22',
      value: 101578914,
    },
    {
      date: '2014-04-23',
      value: 95877608,
    },
    {
      date: '2014-04-24',
      value: 62088857,
    },
    {
      date: '2014-04-25',
      value: 92071353,
    },
    {
      date: '2014-04-26',
      value: 81790062,
    },
    {
      date: '2014-04-27',
      value: 105003761,
    },
    {
      date: '2014-04-28',
      value: 100457727,
    },
    {
      date: '2014-04-29',
      value: 98253926,
    },
    {
      date: '2014-04-30',
      value: 67956992,
    },
  ],
]

const series = {
  monthDataSeries1: {
    prices: [
      8107.85,
      8128.0,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9340.85,
    ],
    dates: [
      '13 Nov 2017',
      '14 Nov 2017',
      '15 Nov 2017',
      '16 Nov 2017',
      '17 Nov 2017',
      '20 Nov 2017',
      '21 Nov 2017',
      '22 Nov 2017',
      '23 Nov 2017',
      '24 Nov 2017',
      '27 Nov 2017',
      '28 Nov 2017',
      '29 Nov 2017',
      '30 Nov 2017',
      '01 Dec 2017',
      '04 Dec 2017',
      '05 Dec 2017',
      '06 Dec 2017',
      '07 Dec 2017',
      '08 Dec 2017',
    ],
  },
  monthDataSeries2: {
    prices: [
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9040.85,
      8340.7,
      8165.5,
      8122.9,
      8107.85,
      8128.0,
    ],
    dates: [
      '13 Nov 2017',
      '14 Nov 2017',
      '15 Nov 2017',
      '16 Nov 2017',
      '17 Nov 2017',
      '20 Nov 2017',
      '21 Nov 2017',
      '22 Nov 2017',
      '23 Nov 2017',
      '24 Nov 2017',
      '27 Nov 2017',
      '28 Nov 2017',
      '29 Nov 2017',
      '30 Nov 2017',
      '01 Dec 2017',
      '04 Dec 2017',
      '05 Dec 2017',
      '06 Dec 2017',
      '07 Dec 2017',
      '08 Dec 2017',
    ],
  },
  monthDataSeries3: {
    prices: [
      7114.25,
      7126.6,
      7116.95,
      7203.7,
      7233.75,
      7451.0,
      7381.15,
      7348.95,
      7347.75,
      7311.25,
      7266.4,
      7253.25,
      7215.45,
      7266.35,
      7315.25,
      7237.2,
      7191.4,
      7238.95,
      7222.6,
      7217.9,
      7359.3,
      7371.55,
      7371.15,
      7469.2,
      7429.25,
      7434.65,
      7451.1,
      7475.25,
      7566.25,
      7556.8,
      7525.55,
      7555.45,
      7560.9,
      7490.7,
      7527.6,
      7551.9,
      7514.85,
      7577.95,
      7592.3,
      7621.95,
      7707.95,
      7859.1,
      7815.7,
      7739.0,
      7778.7,
      7839.45,
      7756.45,
      7669.2,
      7580.45,
      7452.85,
      7617.25,
      7701.6,
      7606.8,
      7620.05,
      7513.85,
      7498.45,
      7575.45,
      7601.95,
      7589.1,
      7525.85,
      7569.5,
      7702.5,
      7812.7,
      7803.75,
      7816.3,
      7851.15,
      7912.2,
      7972.8,
      8145.0,
      8161.1,
      8121.05,
      8071.25,
      8088.2,
      8154.45,
      8148.3,
      8122.05,
      8132.65,
      8074.55,
      7952.8,
      7885.55,
      7733.9,
      7897.15,
      7973.15,
      7888.5,
      7842.8,
      7838.4,
      7909.85,
      7892.75,
      7897.75,
      7820.05,
      7904.4,
      7872.2,
      7847.5,
      7849.55,
      7789.6,
      7736.35,
      7819.4,
      7875.35,
      7871.8,
      8076.5,
      8114.8,
      8193.55,
      8217.1,
      8235.05,
      8215.3,
      8216.4,
      8301.55,
      8235.25,
      8229.75,
      8201.95,
      8164.95,
      8107.85,
      8128.0,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
    ],
    dates: [
      '02 Jun 2017',
      '05 Jun 2017',
      '06 Jun 2017',
      '07 Jun 2017',
      '08 Jun 2017',
      '09 Jun 2017',
      '12 Jun 2017',
      '13 Jun 2017',
      '14 Jun 2017',
      '15 Jun 2017',
      '16 Jun 2017',
      '19 Jun 2017',
      '20 Jun 2017',
      '21 Jun 2017',
      '22 Jun 2017',
      '23 Jun 2017',
      '27 Jun 2017',
      '28 Jun 2017',
      '29 Jun 2017',
      '30 Jun 2017',
      '03 Jul 2017',
      '04 Jul 2017',
      '05 Jul 2017',
      '06 Jul 2017',
      '07 Jul 2017',
      '10 Jul 2017',
      '11 Jul 2017',
      '12 Jul 2017',
      '13 Jul 2017',
      '14 Jul 2017',
      '17 Jul 2017',
      '18 Jul 2017',
      '19 Jul 2017',
      '20 Jul 2017',
      '21 Jul 2017',
      '24 Jul 2017',
      '25 Jul 2017',
      '26 Jul 2017',
      '27 Jul 2017',
      '28 Jul 2017',
      '31 Jul 2017',
      '01 Aug 2017',
      '02 Aug 2017',
      '03 Aug 2017',
      '04 Aug 2017',
      '07 Aug 2017',
      '08 Aug 2017',
      '09 Aug 2017',
      '10 Aug 2017',
      '11 Aug 2017',
      '14 Aug 2017',
      '16 Aug 2017',
      '17 Aug 2017',
      '18 Aug 2017',
      '21 Aug 2017',
      '22 Aug 2017',
      '23 Aug 2017',
      '24 Aug 2017',
      '28 Aug 2017',
      '29 Aug 2017',
      '30 Aug 2017',
      '31 Aug 2017',
      '01 Sep 2017',
      '04 Sep 2017',
      '05 Sep 2017',
      '06 Sep 2017',
      '07 Sep 2017',
      '08 Sep 2017',
      '11 Sep 2017',
      '12 Sep 2017',
      '13 Sep 2017',
      '14 Sep 2017',
      '15 Sep 2017',
      '18 Sep 2017',
      '19 Sep 2017',
      '20 Sep 2017',
      '21 Sep 2017',
      '22 Sep 2017',
      '25 Sep 2017',
      '26 Sep 2017',
      '27 Sep 2017',
      '28 Sep 2017',
      '29 Sep 2017',
      '03 Oct 2017',
      '04 Oct 2017',
      '05 Oct 2017',
      '06 Oct 2017',
      '09 Oct 2017',
      '10 Oct 2017',
      '11 Oct 2017',
      '12 Oct 2017',
      '13 Oct 2017',
      '16 Oct 2017',
      '17 Oct 2017',
      '18 Oct 2017',
      '19 Oct 2017',
      '23 Oct 2017',
      '24 Oct 2017',
      '25 Oct 2017',
      '26 Oct 2017',
      '27 Oct 2017',
      '30 Oct 2017',
      '31 Oct 2017',
      '01 Nov 2017',
      '02 Nov 2017',
      '03 Nov 2017',
      '06 Nov 2017',
      '07 Nov 2017',
      '08 Nov 2017',
      '09 Nov 2017',
      '10 Nov 2017',
      '13 Nov 2017',
      '14 Nov 2017',
      '15 Nov 2017',
      '16 Nov 2017',
      '17 Nov 2017',
      '20 Nov 2017',
      '21 Nov 2017',
      '22 Nov 2017',
      '23 Nov 2017',
      '24 Nov 2017',
      '27 Nov 2017',
      '28 Nov 2017',
    ],
  },
}

const options1 = {
  series: [
    {
      name: 'Sales',
      data: [105, 414, 357, 511, 497, 621, 695, 912, 748],
    },
  ],
  chart: {
    height: 280,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'straight',
  },
  title: {
    text: 'Line Chart',
    align: 'left',
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
}
const options2 = {
  series: [
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: 'Page Views',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ],
  chart: {
    height: 280,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'straight',
    dashArray: [0, 8, 5],
  },
  title: {
    text: 'Multiple Lines',
    align: 'left',
  },
  legend: {
    tooltipHoverFormatter: function (val: string, opts: any) {
      return (
        val +
        ' - ' +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        ''
      )
    },
    position: 'top',
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val: string) {
            return val + ' (mins)'
          },
        },
      },
      {
        title: {
          formatter: function (val: string) {
            return val + ' per session'
          },
        },
      },
      {
        title: {
          formatter: function (val: string) {
            return val
          },
        },
      },
    ],
  },
  grid: {
    borderColor: '#f1f1f1',
  },
}
const options4 = {
  series: [
    {
      name: 'New members',
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79],
    },
  ],
  chart: {
    type: 'line',
    height: 280,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'stepline',
  },
  colors: [themeColors.accent],
  dataLabels: {
    enabled: false,
  },
  title: {
    text: 'Stepline Chart',
    align: 'left',
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
}

const options5 = {
  series: [
    {
      name: 'Balance',
      data: series.monthDataSeries1.prices,
    },
  ],
  chart: {
    type: 'area',
    height: 280,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'straight',
  },
  colors: [themeColors.accent],
  title: {
    text: 'Area Chart',
    align: 'left',
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    opposite: true,
  },
  legend: {
    horizontalAlign: 'left',
  },
}

const options6 = {
  series: [
    {
      name: 'Completed',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Pending',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 280,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
  title: {
    text: 'Multiple Area',
    align: 'left',
  },
  legend: {
    position: 'top',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'smooth',
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
}
let ts1 = 1388534400000
let ts2 = 1388620800000
let ts3 = 1389052800000

const dataSet: any[] = [[], [], []]

for (let i = 0; i < 12; i++) {
  ts1 = ts1 + 86400000
  const innerArr: any[] = [ts1, dataSeries[2][i].value]
  dataSet[0].push(innerArr)
}
for (let i = 0; i < 18; i++) {
  ts2 = ts2 + 86400000
  const innerArr: any[] = [ts2, dataSeries[1][i].value]
  dataSet[1].push(innerArr)
}
for (let i = 0; i < 12; i++) {
  ts3 = ts3 + 86400000
  const innerArr: any[] = [ts3, dataSeries[0][i].value]
  dataSet[2].push(innerArr)
}

const options7 = {
  series: [
    {
      name: 'Desktops',
      data: dataSet[0],
    },
    {
      name: 'Phones',
      data: dataSet[1],
    },
    {
      name: 'Tablets',
      data: dataSet[2],
    },
  ],
  chart: {
    type: 'area',
    stacked: false,
    height: 280,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100],
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#8e8da4',
      },
      offsetX: 0,
      formatter: function (val: number) {
        return (val / 1000000).toFixed(2)
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 8,
    min: new Date('01/01/2014').getTime(),
    max: new Date('01/20/2014').getTime(),
    labels: {
      rotate: -15,
      rotateAlways: true,
      formatter: function (val: number, timestamp: string | number) {
        return moment(new Date(timestamp)).format('DD MMM YYYY')
      },
    },
  },
  colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
  title: {
    text: 'Multiple Areas',
    align: 'left',
  },
  tooltip: {
    shared: true,
  },
  stroke: {
    width: [2, 2, 2],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    //offsetX: -10
  },
}
const options8 = {
  series: [
    {
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ],
  chart: {
    height: 280,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: string) {
      return val + '%'
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    position: 'top',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val: string) {
        return val + '%'
      },
    },
  },
  colors: [themeColors.accent, themeColors.secondary, themeColors.orange],
  title: {
    text: 'Bar Chart',
    align: 'left',
  },
}

const options9 = {
  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: 'bar',
    height: 280,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
  ],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  title: {
    text: 'Multiple Bars',
    align: 'left',
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return '$ ' + val + 'K'
      },
    },
  },
}
const options10 = {
  series: [
    {
      name: 'Desktops',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'Phones',
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: 'Tablets',
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: 'Hybrid',
      data: [21, 7, 25, 13, 22, 8],
    },
  ],
  chart: {
    type: 'bar',
    height: 280,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.green,
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'top',
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '01/01/2011 GMT',
      '01/02/2011 GMT',
      '01/03/2011 GMT',
      '01/04/2011 GMT',
      '01/05/2011 GMT',
      '01/06/2011 GMT',
    ],
  },
  title: {
    text: 'Stacked Bars',
    align: 'left',
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  fill: {
    opacity: 1,
  },
}
const options11 = {
  series: [
    {
      name: 'Corporate',
      data: [
        {
          x: 'Team A',
          y: [1, 5],
        },
        {
          x: 'Team B',
          y: [4, 6],
        },
        {
          x: 'Team C',
          y: [5, 8],
        },
        {
          x: 'Team D',
          y: [3, 11],
        },
      ],
    },
    {
      name: 'Service',
      data: [
        {
          x: 'Team A',
          y: [2, 6],
        },
        {
          x: 'Team B',
          y: [1, 3],
        },
        {
          x: 'Team C',
          y: [7, 8],
        },
        {
          x: 'Team D',
          y: [5, 9],
        },
      ],
    },
  ],
  chart: {
    type: 'rangeBar',
    height: 280,
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.green,
  ],
  title: {
    text: 'Range Column',
    align: 'left',
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  dataLabels: {
    enabled: true,
  },
}
const options12 = {
  series: [
    {
      name: 'Spaceships',
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  chart: {
    type: 'bar',
    height: 280,
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.green,
  ],
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  title: {
    text: 'Horizontal Bar',
    align: 'left',
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      'South Korea',
      'Canada',
      'United Kingdom',
      'Netherlands',
      'Italy',
      'France',
      'Japan',
      'United States',
      'China',
      'Germany',
    ],
  },
}

const options13 = {
  series: [
    {
      name: 'Completed',
      data: [44, 55, 41, 64, 22, 43, 21],
    },
    {
      name: 'Pending',
      data: [53, 32, 33, 52, 13, 44, 32],
    },
  ],
  chart: {
    type: 'bar',
    height: 280,
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.green,
  ],
  title: {
    text: 'Horizontal Bar Multiple',
    align: 'left',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff'],
    },
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
  },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
}

const options14 = {
  series: [
    {
      data: [
        {
          x: 'Analysis',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime(),
          ],
          fillColor: themeColors.accent,
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime(),
          ],
          fillColor: themeColors.secondary,
        },
        {
          x: 'Coding',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime(),
          ],
          fillColor: themeColors.orange,
        },
        {
          x: 'Testing',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime(),
          ],
          fillColor: themeColors.info,
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime(),
          ],
          fillColor: themeColors.purple,
        },
      ],
    },
  ],
  title: {
    text: 'Timeline',
    align: 'left',
  },
  chart: {
    height: 280,
    type: 'rangeBar',
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.green,
  ],
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false,
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: string, opts: any) {
      const label = opts.w.globals.labels[opts.dataPointIndex]
      const a = moment(val[0])
      const b = moment(val[1])
      const diff = b.diff(a, 'days')
      return label + ': ' + diff + (diff > 1 ? 'd' : 'd')
    },
    style: {
      colors: ['#f3f4f5', '#fff'],
    },
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    show: false,
  },
  grid: {
    row: {
      colors: ['transparent'],
      opacity: 1,
    },
  },
}

function generateData(
  baseval: number,
  count: number,
  yrange: { min: number; max: number }
) {
  let i = 0
  const series = []
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

    series.push([x, y, z])
    baseval += 86400000
    i++
  }
  return series
}

const options15 = {
  series: [
    {
      name: 'Bubble1',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble2',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble3',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble4',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chart: {
    height: 280,
    type: 'bubble',
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.green,
  ],
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 0.8,
  },
  title: {
    text: 'Bubble Chart',
  },
  xaxis: {
    tickAmount: 12,
    type: 'category',
  },
  yaxis: {
    max: 70,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
}

function generateDayWiseTimeSeries(
  baseval: number,
  count: number,
  yrange: { min: number; max: number }
) {
  let i = 0
  const series = []
  while (i < count) {
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push([baseval, y])
    baseval += 86400000
    i++
  }
  return series
}

const options16 = {
  series: [
    {
      name: 'Team 1',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'Team 2',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'Team 3',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'Team 4',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        10,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'Team 5',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ],
  title: {
    text: 'Scatter Chart',
  },
  chart: {
    height: 280,
    type: 'scatter',
    zoom: {
      type: 'xy',
    },
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info,
  ],
  dataLabels: {
    enabled: false,
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    max: 70,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
}

const options17 = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 405,
    type: 'pie',
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.info,
    themeColors.purple,
  ],
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 315,
          toolbar: {
            show: false,
          },
        },
        legend: {
          position: 'top',
        },
      },
    },
  ],
  legend: {
    position: 'right',
    horizontalAlign: 'center',
  },
}

const options18 = {
  series: [44, 55, 41, 17, 15],
  title: {
    text: 'Donut Chart',
  },
  chart: {
    width: 405,
    type: 'donut',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info,
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 280,
          toolbar: {
            show: false,
          },
        },
        legend: {
          position: 'top',
        },
      },
    },
  ],
  legend: {
    position: 'right',
    horizontalAlign: 'center',
  },
}
const options19 = {
  series: [70],
  title: {
    text: 'Radial Bar',
  },
  chart: {
    height: 295,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info,
  ],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
    },
  },
  labels: ['Power'],
}

const options20 = {
  series: [44, 55, 67, 83],
  title: {
    text: 'Radial Bar Multiple',
  },
  chart: {
    height: 295,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info,
  ],
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (_: string) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249
          },
        },
      },
    },
  },
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
}

const options21 = {
  series: [67],
  title: {
    text: 'Radial Bar Gauge',
  },
  chart: {
    height: 295,
    type: 'radialBar',
    offsetY: -10,
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info,
  ],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 120,
        },
        value: {
          offsetY: 76,
          fontSize: '22px',
          color: undefined,
          formatter: function (val: string) {
            return val + '%'
          },
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 4,
  },
  labels: ['Median Ratio'],
}

const options22 = {
  series: [76],
  title: {
    text: 'Radial Bar Gauge',
  },
  chart: {
    height: 295,
    type: 'radialBar',
    //offsetY: -20,
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info,
  ],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#e7e7e7',
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2,
        },
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
        },
      },
    },
  },
  grid: {
    padding: {
      //top: -10
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91],
    },
  },
  labels: ['Average Results'],
}
const options23 = {
  series: [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
  ],
  chart: {
    height: 350,
    type: 'radar',
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info,
  ],
  title: {
    text: 'Radar Chart',
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June'],
  },
}
</script>

<template>
  <div class="apex-dashboard">
    <div class="columns is-multiline">
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-1"
            :height="options1.chart.height"
            :type="options1.chart.type"
            :series="options1.series"
            :options="options1"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-2"
            :height="options2.chart.height"
            :type="options2.chart.type"
            :series="options2.series"
            :options="options2"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-4"
            :height="options4.chart.height"
            :type="options4.chart.type"
            :series="options4.series"
            :options="options4"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-5"
            :height="options5.chart.height"
            :type="options5.chart.type"
            :series="options5.series"
            :options="options5"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-6"
            :height="options6.chart.height"
            :type="options6.chart.type"
            :series="options6.series"
            :options="options6"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-7"
            :height="options7.chart.height"
            :type="options7.chart.type"
            :series="options7.series"
            :options="options7"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-8"
            :height="options8.chart.height"
            :type="options8.chart.type"
            :series="options8.series"
            :options="options8"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-9"
            :height="options9.chart.height"
            :type="options9.chart.type"
            :series="options9.series"
            :options="options9"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-10"
            :height="options10.chart.height"
            :type="options10.chart.type"
            :series="options10.series"
            :options="options10"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-11"
            :height="options11.chart.height"
            :type="options11.chart.type"
            :series="options11.series"
            :options="options11"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-12"
            :height="options12.chart.height"
            :type="options12.chart.type"
            :series="options12.series"
            :options="options12"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-13"
            :height="options13.chart.height"
            :type="options13.chart.type"
            :series="options13.series"
            :options="options13"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-14"
            :height="options14.chart.height"
            :type="options14.chart.type"
            :series="options14.series"
            :options="options14"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-15"
            :height="options15.chart.height"
            :type="options15.chart.type"
            :series="options15.series"
            :options="options15"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-16"
            :height="options16.chart.height"
            :type="options16.chart.type"
            :series="options16.series"
            :options="options16"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-17"
            :height="options17.chart.height"
            :type="options17.chart.type"
            :series="options17.series"
            :options="options17"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-18"
            :height="options18.chart.height"
            :type="options18.chart.type"
            :series="options18.series"
            :options="options18"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-19"
            :height="options19.chart.height"
            :type="options19.chart.type"
            :series="options19.series"
            :options="options19"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-20"
            :height="options20.chart.height"
            :type="options20.chart.type"
            :series="options20.series"
            :options="options20"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-21"
            :height="options21.chart.height"
            :type="options21.chart.type"
            :series="options21.series"
            :options="options21"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-22"
            :height="options22.chart.height"
            :type="options22.chart.type"
            :series="options22.series"
            :options="options22"
          ></apexchart>
        </div>
      </div>
      <div class="column is-6">
        <div class="s-card">
          <apexchart
            id="apex-chart-23"
            :height="options23.chart.height"
            :type="options23.chart.type"
            :series="options23.series"
            :options="options23"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>
