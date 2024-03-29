import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaJabonesParaRopa extends BasePage {

    readonly JABONES_PARA_ROPA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JABONES_PARA_ROPA = this.page.locator('//a [@id="menu-item-category-jabones-ropa"]')
    }

    async clickLimpiezaJabonesParaRopa(): Promise<void> {
        await this.click(this.JABONES_PARA_ROPA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaJabonesParaRopa(): Promise<void> {
        await this.clickLimpiezaJabonesParaRopa()
    }
}
