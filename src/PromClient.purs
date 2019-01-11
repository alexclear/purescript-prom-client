module PromClient
       ( PromClient
       , PromCounter
       , createPromClient
       , metrics
       , metricsContentType
       , increment
       ) where

import Data.Unit (Unit)
import Effect (Effect)

foreign import data PromClient :: Type

foreign import data PromCounter :: Type

foreign import createPromClient :: Effect PromClient

foreign import metrics :: PromClient -> Effect String

foreign import metricsContentType :: PromClient -> Effect String

foreign import increment :: PromClient -> String -> Effect Unit
