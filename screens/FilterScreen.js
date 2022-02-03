import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';
import {
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { LogBox } from 'react-native';
import { setFilters } from '../store/actions/meals';
import { useDispatch } from 'react-redux';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const SwitchFilter = (props) => {
  return (
    <View style={styles.filterCont}>
      <Text style={styles.filText}>
        {props.filTitle}
      </Text>
      <Switch
        trackColor={{
          false: '#FECACA',
          true: Colors.accent,
        }}
        thumbColor='white'
        value={props.val}
        onValueChange={props.valChange}
      />
    </View>
  );
};

const FilterScreen = ({ navigation }) => {
  const [glutenFree, setGlutenFree] =
    useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] =
    useState(false);
  const [lactoseFree, setLactoseFree] =
    useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilter = {
      gluten: glutenFree,
      lactose: lactoseFree,
      vegan: vegan,
      vegetarian: vegetarian,
    };
    dispatch(setFilters(appliedFilter));
  }, [
    glutenFree,
    vegetarian,
    vegan,
    lactoseFree,
    dispatch,
  ]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons
          HeaderButtonComponent={
            CustomHeaderButton
          }
        >
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons
          HeaderButtonComponent={
            CustomHeaderButton
          }
        >
          <Item
            title='Save'
            iconName='ios-save'
            // onPress={}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.mainCont}>
      <Text style={styles.title}>
        Available Filters
      </Text>
      <SwitchFilter
        filTitle=' Gluten-Free'
        val={glutenFree}
        valChange={(newVal) =>
          setGlutenFree(newVal)
        }
      />
      <SwitchFilter
        filTitle=' Vegan '
        val={vegan}
        valChange={(newVal) => setVegan(newVal)}
      />
      <SwitchFilter
        filTitle=' Vegetarian '
        val={vegetarian}
        valChange={(newVal) =>
          setVegetarian(newVal)
        }
      />
      <SwitchFilter
        filTitle=' Lactose-Free '
        val={lactoseFree}
        valChange={(newVal) =>
          setLactoseFree(newVal)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    margin: 20,
    textAlign: 'center',
    color: '#6B7280',
  },
  filterCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
  filText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
  },
});

export default FilterScreen;
