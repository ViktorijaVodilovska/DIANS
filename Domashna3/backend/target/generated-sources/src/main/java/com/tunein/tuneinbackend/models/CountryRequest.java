package com.tunein.tuneinbackend.models;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * CountryRequest
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2020-12-17T23:24:00.447004300+01:00[Europe/Berlin]")
public class CountryRequest   {
  @JsonProperty("country_name")
  private String countryName = null;

  public CountryRequest countryName(String countryName) {
    this.countryName = countryName;
    return this;
  }

  /**
   * Get countryName
   * @return countryName
  **/
  @ApiModelProperty(example = "Italy", value = "")
  
    public String getCountryName() {
    return countryName;
  }

  public void setCountryName(String countryName) {
    this.countryName = countryName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CountryRequest countryRequest = (CountryRequest) o;
    return Objects.equals(this.countryName, countryRequest.countryName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(countryName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CountryRequest {\n");
    
    sb.append("    countryName: ").append(toIndentedString(countryName)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
