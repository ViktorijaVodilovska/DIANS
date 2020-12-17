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
 * MoodRequest
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2020-12-17T23:24:00.447004300+01:00[Europe/Berlin]")
public class MoodRequest   {
  @JsonProperty("mood_name")
  private String moodName = null;

  public MoodRequest moodName(String moodName) {
    this.moodName = moodName;
    return this;
  }

  /**
   * Get moodName
   * @return moodName
  **/
  @ApiModelProperty(example = "festive", value = "")
  
    public String getMoodName() {
    return moodName;
  }

  public void setMoodName(String moodName) {
    this.moodName = moodName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MoodRequest moodRequest = (MoodRequest) o;
    return Objects.equals(this.moodName, moodRequest.moodName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(moodName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MoodRequest {\n");
    
    sb.append("    moodName: ").append(toIndentedString(moodName)).append("\n");
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
