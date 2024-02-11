import requests
import pandas as pd
from IPython.display import display
import folium

def file():
    #Array of towns in Suffolk County and Nassau County
    list_of_towns = ["Babylon", "Brookhaven", "East Hampton", "Huntington", "Islip", "Riverhead", "Smithtown", "Shelter Island", "Southampton", "Southold", "Hempstead", "North Hempstead", "Oyster Bay"]

    url = "http://api.openweathermap.org/data/2.5/air_pollution"

    #List of latitudes and longitudes, will parse through
    lat_list = [40.6956552, 40.7792653, 40.9633868, 40.868154, 40.7300685, 40.9168692, 40.8559314, 41.0682649, 40.884267, 41.0651442, 40.6736812, 40.7850862, 40.769652199999996]
    long_list = [-73.3256753, -72.9153827, -72.1847598, -73.425676, -73.2107266, -72.6624189, -73.2006687, -72.3388956, -72.3895296, -72.4263497, -73.6190736, -73.6495108, -73.4998644683956]

    aqi_list = []
    co_list = []
    no_list = []
    no2_list = []
    o3_list = []
    so2_list = []
    pm2_5_list = []
    pm10_list = []
    nh3_list = []

    #Simutaneously go through latitude and longitude using zip function
    for lat, long in zip(lat_list, long_list):
        params = {
            "lat": lat,
            "lon": long,
            "appid": "1b08d0d3efbd6150c063c7872efc94ff"
        }
        # Make the API call
        response = requests.get(url, params=params)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response
            data = response.json()

            # Extract the "aqi" value from the response
            aqi = data['list'][0]['main']['aqi']
            co = data['list'][0]['components']['co']
            no = data['list'][0]['components']['no']
            no2 = data['list'][0]['components']['no2']
            o3 = data['list'][0]['components']['o3']
            so2 = data['list'][0]['components']['so2']
            pm2_5 = data['list'][0]['components']['pm2_5']
            pm10 = data['list'][0]['components']['pm10']
            nh3 = data['list'][0]['components']['nh3']

            aqi_list.append(aqi)
            co_list.append(co)
            no_list.append(no)
            no2_list.append(no2)
            o3_list.append(o3)
            so2_list.append(so2)
            pm2_5_list.append(pm2_5)
            pm10_list.append(pm10)
            nh3_list.append(nh3)

        else:
            print("Error:", response.status_code)

    df = pd.DataFrame({"Name": list_of_towns,
                        "AQI": aqi_list,
                        "CO": co_list,
                        "NO": no_list,
                        "NO2": no2_list,
                        "O3": o3_list,
                        "SO2": so2_list,
                        "pm2_5": pm2_5_list,
                        "pm10": pm10_list,
                        "nh3": nh3_list,
                        "lat": lat_list,
                        "long": long_list
    })

    pd.set_option('display.max_columns', None)
    pd.set_option('display.width', None)

    display(df)

    df.to_csv('df.csv', index=False)
    
def create_map():
    df = pd.read_csv("df.csv")
    colors = ["green", "yellow", "orange", "red", "purple"]
              
    map = folium.Map(location=[40.8128, -73.0560], 
                     control_scale=True,
                     zoom_start=9,
                     zoom_controls = False,
                     scrollWheelZoom = False,
                     dragging = False)
    
    for _, row in df.iterrows():
        info = f"""
        <b>Neighborhood:</b> {row["Name"]}<br />
        <b>AQI:</b> {row["AQI"]}<br/>
        <b>Carbon Monoxide:</b> {row["CO"]}<br/>
        <b>Nitric Oxide:</b> {row["NO"]}<br/>
        <b>Nitrogen Dioxide:</b> {row["NO2"]}<br/>
        <b>Ozone:</b> {row["O3"]}<br/>
        <b>Sulfur Dioxide:</b> {row["SO2"]}<br/>
        <b>Particulate Matter 2.5:</b> {row["pm2_5"]}<br/>
        <b>Particulate Matter 10:</b> {row["pm10"]}
        """
        cum = folium.CircleMarker([row["lat"], row["long"]], 
                                  popup = folium.Popup(info, max_width=300,), 
                                  color = colors[row["AQI"]-1], 
                                  fill_color = colors[row["AQI"]-1], 
                                  fill_opacity = 1, 
                                  opacity = 0, 
                                  radius = 8)
        cum.add_to(map)
    
    return map

if __name__ == '__main__':
    folium_map = create_map()
    folium_map.save("public/map.html")
    file()