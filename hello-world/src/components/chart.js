import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines"

export default (props) => {
  return (
    <figure>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <figcaption>{props.low} - {props.high} {props.unit}</figcaption>
    </figure>
  );
}
