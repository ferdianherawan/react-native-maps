package com.airbnb.android.react.maps;

import android.content.Context;

import com.facebook.react.views.view.ReactViewGroup;

public class AirMapCallout extends ReactViewGroup {
  private boolean tooltip = false;
  public int width;
  public int height;
  
  private String importantForAccessibility;
  private boolean onLayout;
  private boolean renderToHardwareTextureAndroid;
  private String accessibilityLabel;
  private String accessibilityLiveRegion;
  private String accessibilityComponentType;

  public AirMapCallout(Context context) {
    super(context);
  }

  public void setTooltip(boolean tooltip) {
    this.tooltip = tooltip;
  }

  public boolean getTooltip() {
    return this.tooltip;
  }
}
