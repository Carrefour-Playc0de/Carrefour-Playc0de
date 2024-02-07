import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaAutobrillosCerasPisos extends BasePage {

    readonly AUTOBRILLOS_CERAS_PISOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AUTOBRILLOS_CERAS_PISOS = this.page.locator('//a [@id="menu-item-category-autobrillos-ceras-piso"]')
    }

    async clickLimpiezaAutobrillosCerasPisos(): Promise<void> {
        await this.click(this.AUTOBRILLOS_CERAS_PISOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaAutobrillosCerasPisos(): Promise<void> {
        await this.clickLimpiezaAutobrillosCerasPisos()
    }
}
