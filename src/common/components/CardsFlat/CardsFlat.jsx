import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import Card from "../Card/Card";
import { getEvents } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CardsFlat() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);
  const allEvents = useSelector((state) => state.events);

  return (
    <View>
      <FlatList
        style={{ width: "120%", height: "90%" }}
        data={allEvents}
        //horizontal
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.data().title}
            description={item.data().description}
            date={item.data().start.date}
            photo={item.data().photo}
          />
        )}
      />
    </View>
  );
}
