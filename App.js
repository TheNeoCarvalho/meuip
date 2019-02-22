import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, Animated } from "react-native";

import styles from "./style";
import logo from "./assets/img/ip.png";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.findIp = this.findIp.bind(this);
    this.getData = this.getData.bind(this);

    this.state = {
      ip: "",
      data: ""
    };
  }

  async findIp() {
    this.setState({
      ip: "Descobrindo IP..."
    });

    const ip = await fetch("https://api.ipify.org/?format=json");
    const dataIp = await ip.json();

    this.setState({
      ip: dataIp.ip
    });

    this.getData(this.state.ip);
  }

  async getData(ip) {
    const requestData = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await requestData.json();

    this.setState({
      data
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logo} style={{ width: 150, height: 150 }} />
          <Text style={styles.headerText}>Find My Ip</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyText}>{this.state.ip}</Text>
          <Text style={styles.bodyTextInfo}>
            Provedor: {this.state.data.isp}
          </Text>
          <Text style={styles.bodyTextInfo}>
            País: {this.state.data.countryCode}
          </Text>
          <Text style={styles.bodyTextInfo}>
            Estado: {this.state.data.region}
          </Text>
          <Text style={styles.bodyTextInfo}>
            Cidade: {this.state.data.city}
          </Text>
          <TouchableOpacity style={styles.bodyBtn} onPress={this.findIp}>
            <Text style={styles.btnText}>Descobrir IP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Criado por Manoel Carvalho</Text>
        </View>
      </View>
    );
  }
}
